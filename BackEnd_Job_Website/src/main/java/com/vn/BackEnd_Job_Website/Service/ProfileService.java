package com.vn.BackEnd_Job_Website.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Dto.AccountCandidateDto;
import com.vn.BackEnd_Job_Website.Dto.AccountCompanyDto;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final JwtService jwtService;
    private final AccountRepository repoAccount;
    private final CompanyRepository repoCompany;
    private final CandidateRepository repoCandidate;

    public void info(HttpServletRequest request,
                     HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String accessToken;
        final String userEmail;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        accessToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(accessToken);
        var account = repoAccount.findByEmail(userEmail).orElseThrow(() -> new NoSuchElementException("Account not found"));
        Object authResponse;
        if (account.getRole().getId() == 2){
            var company = repoCompany.findByAccountID(account.getId()).orElseThrow();
            authResponse = AccountCompanyDto.builder()
                    .email(userEmail)
                    .companyName(company.getCompanyName())
                    .introduction(company.getIntroduction())
                    .address(company.getAddress())
                    .founding(company.getFouding())
                    .businessEmail(company.getBusinessEmail())
                    .orgn(company.getOrganizational())
                    .phone(company.getPhoneNumber())
                    .build();
        }else {
            var candidate = repoCandidate.findByAccountID(account.getId()).orElseThrow();
            authResponse = AccountCandidateDto.builder()
                    .email(userEmail)
                    .fullName(candidate.getFullname())
                    .age(candidate.getAge())
                    .gender(candidate.getGender())
                    .universityOrCollege(candidate.getUniversityOrCollege())
                    .city(candidate.getCity())
                    .build();
        }
        response.setContentType("application/json");
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
    }
}
