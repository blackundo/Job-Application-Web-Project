package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.RequestApplyRecord;
import com.vn.BackEnd_Job_Website.Dto.UpdateStatusApplyRequest;
import com.vn.BackEnd_Job_Website.Exception.ResourceNotFoundException;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.ApplyHire;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Respository.ApplyHireRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import lombok.RequiredArgsConstructor;
import net.kaczmarzyk.spring.data.jpa.domain.In;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/apply")
@RequiredArgsConstructor
public class ApplyHireController {

    private final CandidateRepository candidateRepository;
    private final ApplyHireRepository applyHireRepository;
    private final HiringRepository hiringRepository;
    private final CompanyRepository companyRepository;

    @PostMapping("/")
    public ResponseEntity<?> apply(@RequestBody RequestApplyRecord request) throws Exception {
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Not found candidate"));
        var hiring = hiringRepository.findById(request.hiringID()).orElseThrow();

        Optional<ApplyHire> applyExists = applyHireRepository.findByCandidateID_IdAndHiringID_Id(candidate.getId(), hiring.getId());
        // if exist return 204, can't apply 2 time in 1 job
        if(applyExists.isPresent()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            ApplyHire applyHire = new ApplyHire( candidate, hiring, request.status());
            ApplyHire save = applyHireRepository.save(applyHire);
            return new ResponseEntity<>(save, HttpStatus.OK);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@RequestPart Integer id) throws Exception {
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Not found candidate"));
        applyHireRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    /**
     * Is api get all applied of hirings in company
     * required @header with JWT for company
     * @return
     */
    @GetMapping("/get-applied")
    public ResponseEntity<?> getApplyByCompany(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "5") int size){
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();

        Pageable paging = PageRequest.of(page, size);
        Page<ApplyHire> list = applyHireRepository.findByHiringID_CompanyID(company, paging);
        if (!list.isEmpty()){
            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }


    @GetMapping("/get-hiring-applied/{hiringid}")
    public ResponseEntity<?> getApplyByCompanyAndHiring(@PathVariable Integer hiringid) throws ResourceNotFoundException{
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        var applied = applyHireRepository.findByHiringID_CompanyIDAndHiringID_Id(company, hiringid).orElseThrow(() -> {
//                new ResourceNotFoundException("Không timf thấy hoặc hiring baif đăng kh phải của m").printStackTrace();
                return new ResourceNotFoundException("Không timf thấy hoặc hiring baif đăng kh phải của m");}
        );
        return new ResponseEntity<>(applied, HttpStatus.OK);
    }

    @GetMapping("/get-hiring-applied-candidate/{hiringid}")
    public ResponseEntity<?> getApplyByCandidateAndHiring(@PathVariable Integer hiringid) {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow();

        var applied = applyHireRepository.findByCandidateID_IdAndHiringID_Id(candidate.getId(), hiringid);
        return new ResponseEntity<>(applied, HttpStatus.OK);
    }

    @PatchMapping("update-apply")
    public ResponseEntity<?> update(@RequestBody UpdateStatusApplyRequest request) {
        ApplyHire applied = applyHireRepository.findById(request.apply_id())
                .orElseThrow(() -> new ResourceNotFoundException("Apply not found with id " + request.apply_id()));
        applied.setStatus(request.status());
        applyHireRepository.save(applied);
        return new ResponseEntity<>(applied, HttpStatus.OK);
    }
}
