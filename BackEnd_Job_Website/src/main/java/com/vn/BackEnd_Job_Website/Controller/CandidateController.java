package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Dto.ResponseFileCV;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Service.CandidateService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class CandidateController {
//    private final CandidateService service;
//
//    @PostMapping("/uploadcv")
//    public ResponseFileCV uploadCV(@RequestParam("file")MultipartFile file, HttpServletRequest request) throws Exception {
//        Candidate candidate = null;
//        candidate = service.addCV(file, request);
//        String downloadURl = ServletUriComponentsBuilder.fromCurrentContextPath()
//                .path("/download/")
//                .path(String.valueOf(candidate.getId()))
//                .toUriString();
//        return new ResponseFileCV(file.getName(),
//                downloadURl,
//                file.getContentType(),
//                file.getSize());
//    }
//    @GetMapping("/download/{fileId}")
//    public ResponseEntity<Resource> downloadFile(@PathVariable int fileId) throws Exception {
//        Candidate candidate = null;
//        candidate = service.getCV(fileId);
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType("application/pdf"))
//                .header(HttpHeaders.CONTENT_DISPOSITION,
//                        "attachment; filename=\"" + candidate.getFullname()
//                                + "\"")
//                .body(new ByteArrayResource(candidate.getUploadFileCV()));
//    }
}
