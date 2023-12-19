package com.vn.BackEnd_Job_Website.Advice;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.lang.IllegalStateException;

@RestControllerAdvice
public class IllegalStateExceptionHandler {
    @ExceptionHandler(IllegalStateException.class)
    public ProblemDetail handleSecurityException(IllegalStateException ex){
        if(ex.getMessage().contains("Wrong password")){
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
            errDetail.setProperty("wrong", "Wrong password");
            return errDetail;
        }
        if(ex.getMessage().contains("Password are not the same")){
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
            errDetail.setProperty("not_match", "Password are not the same");
            return errDetail;
        }
        ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(404), ex.getMessage());
        errDetail.setProperty("not_found", "File not found");
        return errDetail;
    }


}
