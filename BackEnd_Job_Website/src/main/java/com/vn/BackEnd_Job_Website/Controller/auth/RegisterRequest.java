package com.vn.BackEnd_Job_Website.Controller.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    //Company Field
    private String companyName;
    private String introduction;
    private String address;
    private Date founding;
    private String businessEmail;
    private String orgn;
    private String phone;
    //Candidate Field
    private String fullName;
    private int age;
    private boolean gender;
    private String city;
}
