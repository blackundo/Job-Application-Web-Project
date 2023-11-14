package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CandidateService {

    private final CandidateRepository repository;
    private final AccountRepository repoAccount;
    private final CandidateRepository repoCandidate;
    private final JwtService jwtService;




    public Candidate addCV(MultipartFile file, HttpServletRequest request) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String accessToken;
        final String userEmail;
        if (authHeader != null || authHeader.startsWith("Bearer ")) {
            accessToken = authHeader.substring(7);
            userEmail = jwtService.extractUsername(accessToken);

            var account = repoAccount.findByEmail(userEmail).orElseThrow(() -> new NoSuchElementException("Account not found"));
            var candidate = repoCandidate.findByAccountID(account.getId()).orElseThrow();


            try {
                if(fileName.contains("..")) {
                    throw new Exception("Filename contains invalid path sequence " + fileName);
                }
                repository.updateUploadFileCVById(file.getBytes(), candidate.getId());
                return candidate;
            } catch (Exception e) {
                throw new Exception("Could not save File: " + fileName);
            }
        }else {
            return null;
        }

    }

    public Candidate getCV(int fileId) throws FileNotFoundException{
        return repoCandidate
                .findById(fileId)
                .orElseThrow(
                        () -> new FileNotFoundException("File not found " + fileId)
                );
    }
}
