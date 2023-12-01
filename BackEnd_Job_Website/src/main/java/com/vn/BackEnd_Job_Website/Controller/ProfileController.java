package com.vn.BackEnd_Job_Website.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Dto.AccountCandidateDto;
import com.vn.BackEnd_Job_Website.Dto.CandidateRecord;
import com.vn.BackEnd_Job_Website.Dto.CompanyRecord;
import com.vn.BackEnd_Job_Website.Dto.ResponseFileCV;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Model.MainField;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.MainFieldRepository;
import com.vn.BackEnd_Job_Website.Service.CandidateService;
import com.vn.BackEnd_Job_Website.Service.CompanyService;
import com.vn.BackEnd_Job_Website.Service.ProfileService;
import com.vn.BackEnd_Job_Website.Utils.GetNullPropertyNames;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.beans.BeanUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileservice;
    private final CandidateService candidateservice;
    private final CompanyService companyService;

    private final CompanyRepository companyRepository;
    private final MainFieldRepository mainFieldRepository;
    private final CandidateRepository candidateRepository;

    @PostMapping("/")
    public void profile(
            HttpServletRequest request,
            HttpServletResponse response
    )throws IOException {
        profileservice.info(request,response);
    }



    @PostMapping("/uploadcv")
    public ResponseFileCV uploadCV(@RequestParam("file") MultipartFile file, HttpServletRequest request) throws Exception {
        Candidate candidate = null;
        candidate = candidateservice.addCV(file, request);
        String downloadURl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(String.valueOf(candidate.getId()))
                .toUriString();
        return new ResponseFileCV(file.getName(),
                downloadURl,
                file.getContentType(),
                file.getSize());
    }
//    @GetMapping("/download/{fileId}")
//    public ResponseEntity<Resource> downloadFile(@PathVariable int fileId) throws Exception {
//        Candidate candidate = null;
//        candidate = candidateservice.getCV(fileId);
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType("application/pdf"))
//                .header(HttpHeaders.CONTENT_DISPOSITION,
//                        "attachment; filename=\"" + candidate.getFullname()
//                                + "\"")
//                .body(new ByteArrayResource(candidate.getUploadFileCV()));
//    }



    @PutMapping("/company/update")
    public ResponseEntity<?> updateCompany(@RequestBody CompanyRecord request) throws Exception {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Khong tim thay companty"));
        Company companyUpdated = null;
        if(request.fieldName() != null || request.infoField() != null|| request.activeTime() != null || request.achievement() != null){
            //update MainField Exist
            BeanUtils.copyProperties(request, company , GetNullPropertyNames.__arrayEmpty__(request));
            companyUpdated = companyRepository.save(company);
        }else {
            BeanUtils.copyProperties(request, company, GetNullPropertyNames.__arrayEmpty__(request));
            companyUpdated = companyRepository.save(company);
        }

        return new ResponseEntity<>(companyUpdated, HttpStatus.OK);
    }


    @PatchMapping("/company/update")
    public ResponseEntity<?> updateLobCompany(@RequestParam(required = false) MultipartFile avatar,
                                              @RequestParam(required = false) MultipartFile cover) throws Exception{
//        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Company company = companyRepository.findByAccountID(account.getId()).orElseThrow(() -> new Exception("Khong tim thay companty"));



//        if (request.fieldName() != null){
//            if (company.getMainFieldID() == null){
//                MainField mainField = new MainField(null, request.fieldName(), request.infoField(),request.achievement(), request.activeTime());
//                mainFieldRepository.save(mainField);
//            }else {
//                MainField mainField = mainFieldRepository.findById(company.getMainFieldID().getId()).orElseThrow();
//                mainField.setFieldName(request.fieldName());
//                mainField.setInfoField(request.infoField());
//                mainField.setAchievement(request.achievement());
//                mainField.setActiveTime(request.activeTime());
//                mainFieldRepository.save(mainField);
//            }
//        }
        Company company1 = null;
        //update avatar
        if(avatar != null){
            try {
                companyService.addAvatar(avatar);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        //update cover
        if(cover != null){
            try {
                companyService.addCover(cover);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        //update other field

//        BeanUtils.copyProperties(request, company, GetNullPropertyNames.__arrayEmpty__(request));

//        company.setCompanyName(request.companyName());
//        company.setIntroduction(request.introduction());
//        company.setAddress(request.address());
//        company.setFouding(request.fouding());
//        company.setBusinessEmail(request.businessEmail());
//        company.setOrganizational(request.organizational());
//        company.setPhoneNumber(request.phoneNumber());

        //save
//        var companyUpdated = companyRepository.save(company);
        return new ResponseEntity<>("company", HttpStatus.OK);
    }


    @PutMapping("/candidate/update")
    public ResponseEntity<?> updateCandidate(@RequestBody CandidateRecord request) throws Exception {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow();

        BeanUtils.copyProperties(request, candidate, GetNullPropertyNames.__arrayEmpty__(request));
        var candidateUpdated = candidateRepository.save(candidate);

        return new ResponseEntity<>(candidateUpdated, HttpStatus.OK);
    }
}
