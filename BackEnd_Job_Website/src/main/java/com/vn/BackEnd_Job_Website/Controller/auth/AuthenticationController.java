package com.vn.BackEnd_Job_Website.Controller.auth;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
