package com.vn.BackEnd_Job_Website.Exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class S3Exception extends RuntimeException{
    public S3Exception(String message) {
        super(message);
        printStackTrace();
    }
}
