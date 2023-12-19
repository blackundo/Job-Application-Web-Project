package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Dto.ChangePasswordDTO;
import com.vn.BackEnd_Job_Website.Model.Account;

import java.security.Principal;

public interface UserService {
    void changePassword(ChangePasswordDTO request, Account account);
}
