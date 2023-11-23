package com.vn.BackEnd_Job_Website.Utils;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

public class TokenFromRequest {
    public static String getToken(HttpServletRequest request){
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return null;
        }
        String token = authHeader.substring(7);
        return token;
    }
}
