package com.vn.BackEnd_Job_Website.Controller.hiring;

import com.vn.BackEnd_Job_Website.Dto.HiringPostDto;
import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    public List<Hiring> getAllHirings() {
        return hiringRepository.findAll();
    }

    @GetMapping("/get")
    public Page<Hiring> getHiringsPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return hiringRepository.findAll(pageRequest);
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
//        Hiring hiring = hiringRepository.save(new Hiring(
//                23,
//                company,
//                request.getHiringName(),
//                request.getApplicationLimit(),
//                LocalDate.now(),
//                content,
//                LocalDate.now(),
//                request.getMinSalary(),
//                request.getMaxSalary(),
//                request.getStatus(),
//                request.getFieldName()
//        ));

        return new Hiring();
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
