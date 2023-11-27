package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.RequestApplyRecord;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.ApplyHire;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import com.vn.BackEnd_Job_Website.Respository.ApplyHireRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/apply")
@RequiredArgsConstructor
public class ApplyHireController {

    private final CandidateRepository candidateRepository;
    private final ApplyHireRepository applyHireRepository;
    private final HiringRepository hiringRepository;

    @PostMapping("/")
    public ResponseEntity<?> apply(@RequestBody RequestApplyRecord request) throws Exception {
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Not found candidate"));
        var hiring = hiringRepository.findById(request.hiringID()).orElseThrow();
        ApplyHire applyHire = new ApplyHire( candidate, hiring, request.status());
        ApplyHire save = applyHireRepository.save(applyHire);
        return new ResponseEntity<>(save, HttpStatus.OK);
    }
}
