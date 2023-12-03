package com.vn.BackEnd_Job_Website.Advice;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;



@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    public ProblemDetail handleSecurityException(BadCredentialsException ex){
        //login failed
        ProblemDetail errDetail = null;
//        if (ex instanceof BadCredentialsException){
            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), ex.getMessage());
            errDetail.setProperty("access_denied_reason", "Authentication Failure");
//        }

//        if (ex instanceof AccessDeniedException){
//            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//            errDetail.setProperty("access_denied_reason", "Not Authorized");
//        }
//
//        if (ex instanceof SignatureException){
//            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//            errDetail.setProperty("access_denied_reason", "JWT Signature not valid !");
//        }
//
//        if (ex instanceof ExpiredJwtException){
//            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//            errDetail.setProperty("access_denied_reason", "JWT token already expired !");
//        }

//       other exception handle in JwtFilter
        return errDetail;
    }


}
