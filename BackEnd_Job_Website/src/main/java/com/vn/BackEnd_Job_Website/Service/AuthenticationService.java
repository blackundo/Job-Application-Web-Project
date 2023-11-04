package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationRequest;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationResponse;
import com.vn.BackEnd_Job_Website.Controller.auth.RegisterRequest;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Model.Role;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AccountRepository repoAccount;
    private final CompanyRepository repoCompany;
    private final CandidateRepository repoCandidate;
    private final RoleRepository repoRole;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse regCompany(RegisterRequest request, String role) {
//        var claimRole = Role.builder().roleName(role).build();
        var user = Account.builder()
                .role(repoRole.findById(2).get()) // 1- ADMIN | 2- Company | 3- Candidate
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        repoAccount.save(user);

        //handle user trước
//            Company company = new Company(user.getId(),
//                    request.getCompanyName(),
//                    request.getIntroduction(),
//                    "",
//                    request.getAddress(),
//                    request.getFounding(),
//                    request.getBusinessEmail(),
//                    request.getOrgn(),
//                    request.getPhone()); //contractor này need id, giải pháp tạo 1 actrac base id sài tạm setter

        Company company = new Company();
        company.setAccountID(user);
        company.setCompanyName(request.getCompanyName());
        company.setIntroduction(request.getIntroduction());
        company.setAddress(request.getAddress());
        company.setFouding(request.getFounding());
        company.setBusinessEmail(request.getBusinessEmail());
        company.setOrganizational(request.getOrgn());
        company.setPhoneNumber(request.getPhone());
        repoCompany.save(company);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse regCandidate(RegisterRequest request, String role) {
        var user = Account.builder()
                .role(repoRole.findById(3).get()) // 1- ADMIN | 2- Company | 3- Candidate
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        repoAccount.save(user);

        Candidate candidate = new Candidate();
        candidate.setAccountID(user);
        candidate.setFullname(request.getFullName());
        candidate.setAge(Integer.valueOf(request.getAge()));
        candidate.setGender(request.isGender());
        candidate.setCity(request.getCity());

        repoCandidate.save(candidate);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repoAccount.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
