package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Dto.AccountDTO;
import com.vn.BackEnd_Job_Website.Model.UserAccount;

public interface AccountService {
    String save(AccountDTO accountDTO);
}
