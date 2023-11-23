package com.vn.BackEnd_Job_Website.Controller.hiring;

import com.vn.BackEnd_Job_Website.Dto.HiringPostDto;
import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.*;
import com.vn.BackEnd_Job_Website.Specification.HiringSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping
    public ResponseEntity<List<Hiring>> getAllHirings() {
        return new ResponseEntity<>(hiringRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Hiring>> getHiringsPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable paging = PageRequest.of(page, size);

        Page<Hiring> pageHiring = hiringRepository.findAll(paging);
        List<Hiring> hirings = pageHiring.getContent();
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }

    @GetMapping("/find-hirings")
    public ResponseEntity<?> findHirings(
            @RequestParam(required = false) String text,
            @RequestParam(required = false) Double salary,
            Specification<Hiring> spec){
        if (text != null) {
            spec = spec.and(HiringSpecification.titleContains(text));
        }

        if (salary != null) {
            spec = spec.and(HiringSpecification.salaryGreaterThan(salary));
        }
        List<Hiring> hirings = hiringRepository.findAll(spec);
        return new ResponseEntity<>(hirings, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Hiring> getHiringById(@PathVariable int id) {
        Optional<Hiring> hiring = hiringRepository.findById(id);
        if (hiring.isPresent()) {
            return ResponseEntity.ok(hiring.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public Hiring createHiring(@RequestBody HiringPostDto request) {

        HiringContent content = hiringContentRepository.save(new HiringContent(
                request.getTitlePost(),
                request.getContentPost()
        ));
        Account acc = (Account)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByAccountID(acc.getId()).orElseThrow();
        request.getDateEnd();

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


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHiring(@PathVariable int id) {
        Optional<Hiring> hiring = hiringRepository.findById(id);
        if (hiring.isPresent()) {
            hiringRepository.delete(hiring.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
