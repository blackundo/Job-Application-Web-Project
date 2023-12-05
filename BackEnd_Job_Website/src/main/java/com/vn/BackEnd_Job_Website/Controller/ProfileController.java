package com.vn.BackEnd_Job_Website.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Dto.*;
import com.vn.BackEnd_Job_Website.Exception.S3Exception;
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
import java.util.Arrays;
import java.util.Objects;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final CandidateService candidateService;
    private final CompanyService companyService;

    private final CompanyRepository companyRepository;
    private final MainFieldRepository mainFieldRepository;
    private final CandidateRepository candidateRepository;

    @PostMapping("/")
    public void profile(
            HttpServletRequest request,
            HttpServletResponse response
    )throws IOException {
        profileService.info(request,response);
    }

    //chưa handle lỗi
    @GetMapping(
            value = "/company-avatar/{id}",
            produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE}
    )
    public byte[] getCompanyAvatar(@PathVariable Integer id) {
        return companyService.getAvatar(id);

//        var company = companyRepository.findById(id).orElseThrow(() -> new Exception("Khong tim thay companty"));
//        return new ResponseEntity<>(ResponseCompanyImgDto.builder()
//                .avatar(company.getAvatar())
//                .cover(company.getCover())
//                .build(), HttpStatus.OK);
    }

    @GetMapping(
            value = "/company-cover/{id}",
            produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE}
    )
    public byte[] getCompanyCover(@PathVariable Integer id)  {
        return companyService.getCover(id);
    }

    @GetMapping(
            value = "/company-avatar-token",
            produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE}
    )
    public byte[] getCompanyAvatarToken() {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return companyService.getCoverWithToken(account);
    }

    @GetMapping(
            value = "/company-cover-token",
            produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE}
    )
    public byte[] getCompanyCoverToken() {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return companyService.getAvatarWithToken(account);
    }


    @GetMapping(
            value = "/candidate-cv/{id}",
            produces = MediaType.APPLICATION_PDF_VALUE
    )
    public byte[] getCandidateCV(@PathVariable Integer id)  {
        return candidateService.getCV(id);
    }



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

    @PutMapping("/candidate/update")
    public ResponseEntity<?> updateCandidate(@RequestBody CandidateRecord request) throws Exception {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow();

        BeanUtils.copyProperties(request, candidate, GetNullPropertyNames.__arrayEmpty__(request));
        var candidateUpdated = candidateRepository.save(candidate);

        return new ResponseEntity<>(candidateUpdated, HttpStatus.OK);
    }


    @PatchMapping( "/company/update")
    public ResponseEntity<?> updateLobCompany(@RequestParam(required = false) MultipartFile avatar,
                                              @RequestParam(required = false) MultipartFile cover) throws S3Exception{
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        //update avatar
        if(avatar != null){
            try {
                companyService.addAvatar(avatar, account);
            } catch (S3Exception e) {
                return ResponseEntity.badRequest().body("Error upload avatar  " + e.getMessage());
            }
        }

        //update cover
        if(cover != null){
            try {
                companyService.addCover(cover, account);
            } catch (S3Exception e) {
                return ResponseEntity.badRequest().body("Error upload cover  " + e.getMessage());
            }
        }

//        if (avatar == null && cover == null) return ResponseEntity.badRequest().body("Required Param Multipart");

        return ResponseEntity.ok().body("Upload Done");
    }

    @PatchMapping("/candidate/update")
    public ResponseEntity<?> uploadCV(@RequestParam("file") MultipartFile file) {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        try {
            candidateService.addCV(file, account);
        } catch (S3Exception e) {
            return ResponseEntity.badRequest().body("Error upload cv  " + e.getMessage());
        }
        return ResponseEntity.ok().body("Upload Done");
    }



}
