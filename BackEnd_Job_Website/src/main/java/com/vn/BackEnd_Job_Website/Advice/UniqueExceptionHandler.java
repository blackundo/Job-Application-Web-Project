package com.vn.BackEnd_Job_Website.Advice;


import com.vn.BackEnd_Job_Website.Exception.UniqueException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class UniqueExceptionHandler {
    @ExceptionHandler(UniqueException.class)
    public ProblemDetail handleSecurityException(UniqueException ex){
        ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(404), ex.getMessage());
        errDetail.setProperty("not_found", "ACCOUNT EXITS");
        return errDetail;
    }
}
