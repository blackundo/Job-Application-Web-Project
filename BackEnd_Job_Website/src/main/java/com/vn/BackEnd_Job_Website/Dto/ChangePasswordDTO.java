package com.vn.BackEnd_Job_Website.Dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChangePasswordDTO {
    private String currentPassword;
    private String newPassword;
    private String confirmationPassword;
}
