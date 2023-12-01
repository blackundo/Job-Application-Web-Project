package com.vn.BackEnd_Job_Website.Service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Dto.AccountCandidateDto;
import com.vn.BackEnd_Job_Website.Dto.AccountCompanyDto;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Service.JwtService;
import com.vn.BackEnd_Job_Website.Service.ProfileService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final CompanyRepository repoCompany;
    private final CandidateRepository repoCandidate;

    @Override
    public void info(HttpServletRequest request,
                     HttpServletResponse response) throws IOException {
//        var userEmail = jwtService.extractUsername(accessToken);

        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Object authResponse;
        if (account.getRole().getId() == 2){
            var company = repoCompany.findByAccountID(account.getId()).orElseThrow();
            authResponse = AccountCompanyDto.builder()
                    .id(company.getId())
                    .email(account.getUsername())
                    .role(account.getRole())
                    .companyName(company.getCompanyName())
                    //
                    .fieldName(company.getMainFieldID().getFieldName())
                    .infoField(company.getMainFieldID().getInfoField())
                    .achievement(company.getMainFieldID().getAchievement())
                    .activeTime(company.getMainFieldID().getActiveTime())
                    //
                    .introduction(company.getIntroduction())
                    .address(company.getAddress())
                    .founding(company.getFouding())
                    .businessEmail(company.getBusinessEmail())
                    .orgn(company.getOrganizational())
                    .phone(company.getPhoneNumber())
                    .status(account.isStatus())
                    .build();
        }else {
            var candidate = repoCandidate.findByAccountID(account.getId()).orElseThrow();
            authResponse = AccountCandidateDto.builder()
                    .id(candidate.getId())
                    .email(account.getUsername())
                    .role(account.getRole())
                    .fullName(candidate.getFullname())
                    .age(candidate.getAge())
                    .gender(candidate.getGender())
                    .universityOrCollege(candidate.getUniversityOrCollege())
                    .city(candidate.getCity())
                    .status(account.isStatus())
                    .build();
        }
        response.setContentType("application/json");
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
    }
}
