package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Dto.CompanyRecord;
import com.vn.BackEnd_Job_Website.Dto.ResponseFileCV;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Model.MainField;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.MainFieldRepository;
import com.vn.BackEnd_Job_Website.Service.CandidateService;
import com.vn.BackEnd_Job_Website.Service.CompanyService;
import com.vn.BackEnd_Job_Website.Service.ProfileService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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


    @PostMapping("/company/update")
    public ResponseEntity<?> updateCompany(@RequestParam("avatar") MultipartFile avatar,
                                           @RequestParam("cover") MultipartFile cover,
                                           @RequestBody CompanyRecord request){
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getDetails();
        Company company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        System.out.println(account.getId());
        System.out.println(account.getId());
        System.out.println(account.getId());
        System.out.println(account.getId());
        System.out.println(account.getId());
        System.out.println(account.getId());
        if (request.fieldName() != null){
            MainField mainField = new MainField(null, request.fieldName(), request.infoField(),request.achievement(), request.activeTime());
            var updateMainField = mainFieldRepository.save(mainField);
        }
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
        company.setCompanyName(request.companyName());
        company.setIntroduction(request.introduction());
        company.setAddress(request.address());
        company.setFouding(request.fouding());
        company.setBusinessEmail(request.businessEmail());
        company.setOrganizational(request.organizational());
        company.setPhoneNumber(request.phoneNumber());

        //save
        var companyUpdated = companyRepository.save(company);
        return new ResponseEntity<>(companyUpdated, HttpStatus.OK);
    }
}
