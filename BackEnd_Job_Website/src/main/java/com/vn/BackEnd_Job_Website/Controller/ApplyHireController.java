package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.RequestApplyRecord;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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
        ApplyHire applyHire = new ApplyHire( candidate, hiring, request.status());
        ApplyHire save = applyHireRepository.save(applyHire);
        return new ResponseEntity<>(save, HttpStatus.OK);
    }

    @DeleteMapping("/")
    public ResponseEntity<?> delete(@RequestPart Integer id) throws Exception {
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Not found candidate"));
        return new ResponseEntity<>(HttpStatus.OK);
    }


    /**
     * Is api get all applied of hirings in company
     * required @header with JWT for company
     * @return
     */
    @GetMapping("/get-applied")
    public ResponseEntity<?> getApplyByCompany(){
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        var applied = applyHireRepository.findByHiringID_CompanyID(company).orElseThrow();
        return new ResponseEntity<>(applied, HttpStatus.OK);
    }


    @GetMapping("/get-hiring-applied/{hiringid}")
    public ResponseEntity<?> getApplyByCandidateAndHiring(@PathVariable Integer hiringid) throws ResourceNotFoundException{
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        var applied = applyHireRepository.findByHiringID_CompanyIDAndHiringID_Id(company, hiringid).orElseThrow(() -> {
                new ResourceNotFoundException("Không timf thấy hoặc hiring baif đăng kh phải của m").printStackTrace();
                return new ResourceNotFoundException("Không timf thấy hoặc hiring baif đăng kh phải của m");}
        );
        return new ResponseEntity<>(applied, HttpStatus.OK);
    }
}
