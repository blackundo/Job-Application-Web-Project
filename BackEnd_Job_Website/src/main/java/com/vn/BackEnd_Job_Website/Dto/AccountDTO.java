package com.vn.BackEnd_Job_Website.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
    private Integer id;

    private String name;

    private String email;

    private String password;
}
