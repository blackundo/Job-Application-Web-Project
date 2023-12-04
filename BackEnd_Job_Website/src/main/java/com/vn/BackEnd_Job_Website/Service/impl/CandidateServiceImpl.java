package com.vn.BackEnd_Job_Website.Service.impl;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import com.vn.BackEnd_Job_Website.Exception.S3Exception;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Service.CandidateService;
import com.vn.BackEnd_Job_Website.Service.JwtService;
import com.vn.BackEnd_Job_Website.Utils.S3Utils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CandidateServiceImpl implements CandidateService {
    private final AmazonS3 s3;
    private final AccountRepository repoAccount;
    private final CandidateRepository repoCandidate;

    @Value("${aws.r2.buckets.cv}")
    private String bucketCV;

    @Override
    public void addCV(MultipartFile file, Account account) {
        try {
            if (file.isEmpty()) throw new S3Exception("CV not empty !!!");
            final String fileName = S3Utils.__getFileName__(file);
            s3.putObject(
                    new PutObjectRequest(bucketCV,
                            fileName,
                            file.getInputStream(),
                            S3Utils.__fromMultipartFile__(file)
                    )
            );

            repoCandidate.updateUploadFileCVById(fileName, account.getId());
        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (Exception e) {
            throw new S3Exception(e.getMessage());
        }

    }

//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//        final String accessToken;
//        final String userEmail;
//        if (authHeader != null || authHeader.startsWith("Bearer ")) {
//            accessToken = authHeader.substring(7);
//            userEmail = jwtService.extractUsername(accessToken);
//
//            var account = repoAccount.findByEmail(userEmail).orElseThrow(() -> new NoSuchElementException("Account not found"));
//            var candidate = repoCandidate.findByAccountID(account.getId()).orElseThrow();
//
//
//            try {
//                if(fileName.contains("..")) {
//                    throw new Exception("Filename contains invalid path sequence " + fileName);
//                }
//                repository.updateUploadFileCVById(file.getBytes(), candidate.getId());
//                return candidate;
//            } catch (Exception e) {
//                throw new Exception("Could not save File: " + fileName);
//            }
//        }else {
//            return null;
//        }


    @Override
    public byte[] getCV(Integer id) {
        var candidate = repoCandidate.findById(id).orElseThrow();

        try {
            S3Object object = s3.getObject(bucketCV, candidate.getUploadFileCV());
            return IOUtils.toByteArray(object.getObjectContent());
        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (IOException e) {
            throw new S3Exception(e.getMessage());
        }
    }


}
