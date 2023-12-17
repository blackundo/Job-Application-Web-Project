package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.ResponseReportDTO;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final HiringRepository hiringRepository;
    private final CompanyRepository companyRepository;
    private final CandidateRepository candidateRepository;
    private final AccountRepository accountRepository;

    @GetMapping("/report")
    public ResponseEntity<?> report(){
        return new ResponseEntity<>(ResponseReportDTO.builder()
                .jobs(hiringRepository.count())
                .jobsOpen(hiringRepository.countJobsOpen())
                .jobsClose(hiringRepository.countJobsClose())
                .company(companyRepository.count())
                .candidate(candidateRepository.count())
                .build(),HttpStatus.OK);
    }

    @GetMapping("/companies/pending")
    public ResponseEntity<?> getPendingCompanies() {
        return new ResponseEntity<>(companyRepository.findByAccountStatusIsFalse(), HttpStatus.OK);
    }


//    chưa gửi mail
    @PatchMapping("/accept-company/{companyId}")
    public ResponseEntity<String> acceptCompany(@PathVariable Integer companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        Account account = company.getAccount();
        if (account != null && !account.isStatus()) {
            account.setStatus(true);
            accountRepository.save(account);
            return new ResponseEntity<>("Company accepted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Company not found or already accepted", HttpStatus.BAD_REQUEST);
        }
    }
}
