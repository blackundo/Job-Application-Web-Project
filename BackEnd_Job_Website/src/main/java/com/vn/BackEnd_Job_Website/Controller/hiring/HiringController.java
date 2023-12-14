package com.vn.BackEnd_Job_Website.Controller.hiring;

import com.vn.BackEnd_Job_Website.Dto.HiringPostDto;
import com.vn.BackEnd_Job_Website.Dto.RequestHiringAndCompanyID;
import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.*;
import com.vn.BackEnd_Job_Website.Specification.HiringSpecification;
import com.vn.BackEnd_Job_Website.Utils.GetNullPropertyNames;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hiring")
@RequiredArgsConstructor
public class HiringController {
    private final HiringRepository hiringRepository;
    private final HiringContentRepository hiringContentRepository;
    private final CompanyRepository companyRepository;
    private final Specification<Hiring> spec;

    @GetMapping("/get-all")
    public ResponseEntity<List<Hiring>> getAllHirings() {
        return new ResponseEntity<>(hiringRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getHiringsPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable paging = PageRequest.of(page, size);

        Page<Hiring> pageHiring = hiringRepository.findAll(paging);
//        List<Hiring> hirings = pageHiring.getContent();
        return new ResponseEntity<>(pageHiring, HttpStatus.OK);
    }

    @GetMapping("/find-hirings")
    public ResponseEntity<?> findHirings(
            @RequestParam(required = false) String text,
            @RequestParam(required = false) String hiringName,
            @RequestParam(required = false) String address,
            @RequestParam(required = false) String errollmentStatus,
            @RequestParam(required = false) Double salary){
        Specification<Hiring> spec = this.spec;
        if (text != null) {
            spec = spec.and(HiringSpecification.titleContains(text));
        }

        if (hiringName != null) {
            spec = spec.and(HiringSpecification.nameContains(hiringName));
        }

        if (salary != null) {
            System.out.println(salary);
            spec = spec.and(HiringSpecification.salaryLessThanOrEqualTo(salary));
        }

        if (address != null) {
            System.out.println(address);
            spec = spec.and(HiringSpecification.addressContains(address));
        }

        if (errollmentStatus != null) {
            System.out.println(errollmentStatus);
            spec = spec.and(HiringSpecification.errollmentStatus(errollmentStatus));
        }

        List<Hiring> hirings = hiringRepository.findAll(spec);
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    // find one
    @GetMapping("/{id}")
    public ResponseEntity<?> getHiringById(@PathVariable int id) {
        Optional<Hiring> hiring = hiringRepository.findById(id);
        if (hiring.isPresent()) {
            return ResponseEntity.ok(hiring.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //find one with company
    @GetMapping("/with-comapny")
    public ResponseEntity<?> findByIdAndCompanyId(@RequestBody RequestHiringAndCompanyID request) {

        Optional<Hiring> hiring = hiringRepository.findByIdAndCompanyId(request.hiringId(), request.CompanyId());
        if (hiring.isPresent()) {
            return ResponseEntity.ok(hiring.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/company/{id}")
    public ResponseEntity<?> getHiringByComapny(@PathVariable int id,
                                                @RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "5") int size){
        Pageable paging = PageRequest.of(page, size);

        Page<Hiring> list = hiringRepository.findByCompanyID(id, paging);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @PostMapping("/create")
    public Hiring createHiring(@RequestBody HiringPostDto request) {

        HiringContent content = hiringContentRepository.save(new HiringContent(
                request.getTitlePost(),
                request.getContentPost()
        ));
        Account acc = (Account)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByAccountID(acc.getId()).orElseThrow();
//        request.getDateEnd();

        Hiring hiring = hiringRepository.save(new Hiring(
                company,
                request.getHiringName(),
                request.getApplicationLimit(),
                LocalDate.now(),
                request.getDateEnd(),
                content,
                request.getStatus(),
                request.getFieldName(),
                request.getMinSalary(),
                request.getMaxSalary(),
                request.getErrollmentStatus()
        ));

        return hiring;
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateHiring(@PathVariable Integer id,
                                          @RequestBody HiringPostDto request) throws Exception {
        Hiring hiring = hiringRepository.findById(id).orElseThrow(() -> new Exception("Resource not found"));
        HiringContent content = hiringContentRepository.findById(hiring.getHiringContentID().getId()).orElseThrow(() -> new Exception("Resource not found"));

        if (request.getContentPost() != null || request.getTitlePost() != null) {
            content.setTitle(request.getTitlePost());
            content.setContent(request.getContentPost());
            hiringContentRepository.save(content);
        }
        //
        hiring.setHiringName(request.getHiringName());
        hiring.setApplicationLimit(request.getApplicationLimit());
        hiring.setStatus(request.getStatus());
        hiring.setFieldName(request.getFieldName());
        hiring.setMinSalary(request.getMinSalary());
        hiring.setMaxSalary(request.getMaxSalary());
        hiring.setErrollmentStatus(request.getErrollmentStatus());
        hiringRepository.save(hiring);


        BeanUtils.copyProperties(request, hiring, GetNullPropertyNames.__arrayEmpty__(request));
        var updatedHiring = hiringRepository.save(hiring);

        return new ResponseEntity<>(updatedHiring, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHiring(@PathVariable int id) throws Exception {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        Optional<Hiring> hiring = hiringRepository.findById(id);
        if (hiring.isPresent()) {
            if (hiring.get().getCompanyID().getId() == company.getId()){
                hiringRepository.deleteById(id);
                return ResponseEntity.noContent().build();
            }else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
