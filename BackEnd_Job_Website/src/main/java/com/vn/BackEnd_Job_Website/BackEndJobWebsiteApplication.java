package com.vn.BackEnd_Job_Website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

@SpringBootApplication
@EnableScheduling
public class BackEndJobWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndJobWebsiteApplication.class, args);
	}

}
