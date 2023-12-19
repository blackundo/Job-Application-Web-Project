package com.vn.BackEnd_Job_Website.Advice;


import com.vn.BackEnd_Job_Website.Exception.S3Exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class S3ExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ProblemDetail handleSecurityException(IllegalArgumentException ex){
        ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(404), ex.getMessage());
        errDetail.setProperty("not_found", "File not found");
        return errDetail;
    }


    @ExceptionHandler(S3Exception.class)
    public ProblemDetail handleSecurityException(S3Exception ex){

        ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(404), ex.getMessage());
        errDetail.setProperty("not_found", "Filename not found in R2");
        return errDetail;
    }
}
