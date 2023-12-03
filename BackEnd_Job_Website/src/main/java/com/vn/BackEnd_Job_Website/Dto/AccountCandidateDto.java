package com.vn.BackEnd_Job_Website.Dto;

import com.vn.BackEnd_Job_Website.Model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountCandidateDto {
    private Integer id;
    private String email;
    private Role role;
    private String fullName;
    private int age;
    private boolean gender;
    private String universityOrCollege;
    private String city;
    private boolean status;
}
