package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationRequest;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationResponse;
import com.vn.BackEnd_Job_Website.Controller.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request) {
        return null;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        return null;
    }
}
