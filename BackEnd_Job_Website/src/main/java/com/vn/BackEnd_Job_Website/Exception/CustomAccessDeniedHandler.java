package com.vn.BackEnd_Job_Website.Exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Service.JwtService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

    private final JwtService jwtService;
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String accessToken;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        accessToken = authHeader.substring(7);
        List<String> roleName = jwtService.extractClaim(accessToken, claim -> claim.get("roles", List.class));

        response.setContentType("application/json");
        response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied: You don't have the required role. " + roleName.toString());
        Map<String, Object> authResponse = new HashMap<>();
        authResponse.put("status", HttpServletResponse.SC_FORBIDDEN);
        authResponse.put("message", "Access Denied: You don't have the required role. " + roleName.toString());
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
    }
}
