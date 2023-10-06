package com.vn.BackEnd_Job_Website.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {

    @GetMapping
    public String testa() {
        return "Do Phuoc Dat";

    }
}
