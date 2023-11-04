package com.vn.BackEnd_Job_Website.Dto;

import com.vn.BackEnd_Job_Website.Model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDto implements Serializable {
    private Integer id;
    private Role roleID;
    private String email;
    private String password;
}