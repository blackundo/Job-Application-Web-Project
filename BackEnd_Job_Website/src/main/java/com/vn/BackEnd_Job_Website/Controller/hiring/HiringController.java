package com.vn.BackEnd_Job_Website.Controller.hiring;

import com.vn.BackEnd_Job_Website.Dto.HiringPostDto;
import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.*;
import lombok.RequiredArgsConstructor;
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
    private final HiringStatusRepository hiringStatusRepository;
    private final FieldHiringRepository fieldHiringRepository;
    private final CompanyRepository companyRepository;
    @GetMapping
    public List<Hiring> getAllHirings() {
        return hiringRepository.findAll();
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



        HiringStatus status = hiringStatusRepository.save(new HiringStatus(request.getStatus()));
        HiringContent content = hiringContentRepository.save(new HiringContent(
                request.getTitlePost(),
                request.getContentPost()
        ));
        FieldHiring field = fieldHiringRepository.save(new FieldHiring(
                request.getFieldName()
        ));
        Account acc = (Account)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByAccountID(acc.getId()).orElseThrow();
        Hiring hiring = hiringRepository.save(new Hiring(
                company,
                request.getHiringName(),
                request.getApplicationLimit(),
                LocalDate.now(),
                content,
                status,
                field
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
