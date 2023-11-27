package com.vn.BackEnd_Job_Website.Service;


import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationRequest;
import com.vn.BackEnd_Job_Website.Controller.auth.AuthenticationResponse;
import com.vn.BackEnd_Job_Website.Controller.auth.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;

import java.io.IOException;
import java.sql.SQLException;

public interface AuthenticationService {

    AuthenticationResponse regCompany(RegisterRequest request, String role);

    AuthenticationResponse regCandidate(RegisterRequest request, String role);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException;

    String verifyEmail(String token) throws Exception;

    String resendMail(HttpServletRequest request);
}
