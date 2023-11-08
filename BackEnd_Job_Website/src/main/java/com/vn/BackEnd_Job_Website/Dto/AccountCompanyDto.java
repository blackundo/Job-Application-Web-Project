package com.vn.BackEnd_Job_Website.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountCompanyDto {
    private String email;
    private String companyName;
    private String introduction;
    private String address;
    private Date founding;
    private String businessEmail;
    private String orgn;
    private String phone;
}
