package com.vn.BackEnd_Job_Website.Service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationRequest;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationResponse;
import com.vn.BackEnd_Job_Website.Controller.auth.RegisterRequest;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Model.EmailTokenVeri;
import com.vn.BackEnd_Job_Website.Respository.*;
import com.vn.BackEnd_Job_Website.Service.AuthenticationService;
import com.vn.BackEnd_Job_Website.Service.EmailService;
import com.vn.BackEnd_Job_Website.Service.JwtService;
import com.vn.BackEnd_Job_Website.Utils.buildEmail;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AccountRepository repoAccount;
    private final CompanyRepository repoCompany;
    private final CandidateRepository repoCandidate;
    private final RoleRepository repoRole;
    private final EmailTokenVeriRepository repoEmailVeri;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final EmailService emailSender;

    @Value("${application.security.verify.expiration}")
    private long verifyExpiration;

    @Override
    public AuthenticationResponse regCompany(RegisterRequest request, String role) {
//        var claimRole = Role.builder().roleName(role).build();
        var user = Account.builder()
                .role(repoRole.findById(2).get()) // 1- ADMIN | 2- Company | 3- Candidate
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .status(false)
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
//                    request.getPhone()); //contractor này need id, solution tạo 1 actract base id sài tạm setter

        Company company = new Company();
        company.setAccount(user);
        company.setCompanyName(request.getCompanyName());
        company.setIntroduction(request.getIntroduction());
        company.setAddress(request.getAddress());
        company.setFouding(request.getFounding());
        company.setBusinessEmail(request.getBusinessEmail());
        company.setOrganizational(request.getOrgn());
        company.setPhoneNumber(request.getPhone());
        repoCompany.save(company);


        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    public AuthenticationResponse regCandidate(RegisterRequest request, String role) {
        var user = Account.builder()
                .role(repoRole.findById(3).get()) // 1- ADMIN | 2- Company | 3- Candidate
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .status(false)
                .build();


        repoAccount.save(user);
        String tokenVeri = generateVerificationToken(user); ///nfhdsfghsdjfg



        Candidate candidate = new Candidate();
        candidate.setAccount(user);
        candidate.setFullname(request.getFullName());
        candidate.setAge(Integer.valueOf(request.getAge()));
        candidate.setGender(request.isGender());
        candidate.setCity(request.getCity());
        repoCandidate.save(candidate);

        //send mail
        String link = "http://localhost/api/auth/verify?token=" + tokenVeri;
        emailSender.send(
                request.getEmail(),
                buildEmail.build(request.getFullName(), link));

        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repoAccount.findByEmail(request.getEmail()).orElseThrow();
        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }




    @Override
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.repoAccount.findByEmail(userEmail).orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
//                revokeAllUserTokens(user);
//                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private String generateVerificationToken(Account acc){
        EmailTokenVeri tokenVeri = new EmailTokenVeri(null, LocalDateTime.now(),null,acc);
        repoEmailVeri.save(tokenVeri);
        return String.valueOf(tokenVeri.getId());
    }

    @Override
    public String verifyEmail(String token) throws Exception {
        EmailTokenVeri verificationToken = repoEmailVeri.findById(UUID.fromString(token)).orElseThrow(() -> new Exception("token invalid"));
            if (verificationToken != null){
                if (verificationToken.getConfirmedAt() != null){
//                    throw new IllegalStateException("Email already confirmed");
                    return "Email already confirmed";
                }

                LocalDateTime createAt = verificationToken.getCreatedAt();
                LocalDateTime expiredAt = createAt.plus(Duration.ofMillis(verifyExpiration));
                if (expiredAt.isBefore(LocalDateTime.now())){
                    return "Token expired";
//                    throw new RuntimeException("Token expired");
                }

                Account account = verificationToken.getAccount();
                account.setStatus(true);

                verificationToken.setConfirmedAt(LocalDateTime.now());
                repoEmailVeri.save(verificationToken);
                repoAccount.save(account);
                return  "Verified done !!!";
            }
        return null;
    }

    public void resendMail(){

    }

}
