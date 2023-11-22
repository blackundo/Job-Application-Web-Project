package com.vn.BackEnd_Job_Website.Service;

import org.springframework.scheduling.annotation.Async;

public interface EmailService {

    void send(String to, String email);
}
