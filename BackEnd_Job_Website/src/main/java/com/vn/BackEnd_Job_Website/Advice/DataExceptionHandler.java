package com.vn.BackEnd_Job_Website.Advice;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLException;

@ControllerAdvice
public class DataExceptionHandler {

    @ExceptionHandler(SQLException.class)
    public ProblemDetail handleException(SQLException ex) {
        String msg = ex.getMessage();
        ProblemDetail errDetail = null;
        errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), ex.getMessage());
        errDetail.setProperty("access_denied_reason", "Authentication Failure");
        if(msg.contains("UNIQUE KEY")) {
            System.out.println("huy");
            System.out.println("huy");
            System.out.println("huy");
            System.out.println("huy");
            System.out.println("huy");
            System.out.println("huy");
            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), ex.getMessage());
            errDetail.setProperty("access_denied_reason", "Authentication Failure");
        }
        return errDetail;
    }
}
