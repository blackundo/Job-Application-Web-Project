package com.vn.BackEnd_Job_Website.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusApi {

    @GetMapping("/")
    public String status(){
        return "API is run";
    }
}
