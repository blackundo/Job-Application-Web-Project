package com.vn.BackEnd_Job_Website.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/candidate")
@RequiredArgsConstructor
public class TestCandidate {

    @GetMapping("/test")
    public String test(){
        return "Bạn là candidate";
    }
}
