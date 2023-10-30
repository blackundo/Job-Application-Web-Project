package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Dto.AccountDTO;
import com.vn.BackEnd_Job_Website.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping( path= "api")
public class LoginController{
//    @Autowired
//    private AccountService accountService;
//    @PostMapping("/save")
//    public String save(@RequestBody AccountDTO accountDTO){
//        String id = accountService.save(accountDTO);
//        return id;
//    }
}