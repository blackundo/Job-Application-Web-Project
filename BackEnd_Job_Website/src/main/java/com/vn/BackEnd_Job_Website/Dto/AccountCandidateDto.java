package com.vn.BackEnd_Job_Website.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountCandidateDto {
    private String email;
    private String fullName;
    private int age;
    private boolean gender;
    private String universityOrCollege;
    private String city;
}
