package com.vn.BackEnd_Job_Website.Controller.auth;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request,
            @RequestParam("role") String role
    ){
        if (role.equals("Company")){
            return ResponseEntity.ok(service.regCompany(request, role));
        }else if (role.equals("Candidate")){
            return ResponseEntity.ok(service.regCandidate(request, role));
        }else {
            return new ResponseEntity<>("Invalid role", HttpStatus.BAD_REQUEST);
        }

    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyEmail(
            @RequestParam String token
    ) throws Exception{
        String result = service.verifyEmail(token);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/verified")
    public ResponseEntity<?> emailExistVerified(){
        Account account = (Account)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok().body(account.isStatus());
    }
}
