package com.vn.BackEnd_Job_Website.Service.impl;

import com.vn.BackEnd_Job_Website.Dto.AccountDTO;
import com.vn.BackEnd_Job_Website.Model.UserAccount;
import com.vn.BackEnd_Job_Website.Respository.AccountRespository;
import com.vn.BackEnd_Job_Website.Service.AccountService;

import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    @Override
    public String save(AccountDTO accountDTO) {
        return null;
    }
//
//    @Autowired
//    private AccountRespository accountRespository;
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Override
//    public String save(AccountDTO accountDTO) {
//        UserAccount userAccount = new UserAccount(
//                accountDTO.getId(),
//                accountDTO.getName(),
//                accountDTO.getEmail(),
//                this.passwordEncoder.encode(accountDTO.getPassword())
//        );
//        accountRespository.save(userAccount);
//        return userAccount.getEmail();
//    }


}
