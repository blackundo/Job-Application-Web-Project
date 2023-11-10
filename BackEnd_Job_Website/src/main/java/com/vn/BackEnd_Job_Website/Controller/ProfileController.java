package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationRequest;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationResponse;
import com.vn.BackEnd_Job_Website.Service.ProfileService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService service;
    @PostMapping("/")
    public void profile(
            HttpServletRequest request,
            HttpServletResponse response
    )throws IOException {
        service.info(request,response);
    }
}
