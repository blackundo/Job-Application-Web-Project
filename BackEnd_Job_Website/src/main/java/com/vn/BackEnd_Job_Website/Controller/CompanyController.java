package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class CompanyController {
    private final CompanyService companyService;
    private final CompanyRepository companyRepository;


    @PostMapping("/update")
    public ResponseEntity<?> updateCompany(){
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getDetails();
        Company company = companyRepository.findByAccountID(account.getId()).orElseThrow();
//        company.set
        companyRepository.save(company);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

}
