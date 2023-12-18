package com.vn.BackEnd_Job_Website.Advice;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DataExceptionHandler {

    @ExceptionHandler(ConstraintViolationException.class)
    public ProblemDetail handleException(ConstraintViolationException ex) {
        String msg = ex.getMessage();
        ProblemDetail errDetail = null;
        errDetail = ProblemDetail.forStatusAndDetail(HttpStatus.CONFLICT, ex.getMessage());
        errDetail.setProperty("access_denied_reason", "Authentication Failure");
        if(msg.contains("UNIQUE KEY")) {

            errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), ex.getMessage());
            errDetail.setProperty("access_denied_reason", "Authentication Failure");
        }
        return errDetail;
    }
}
