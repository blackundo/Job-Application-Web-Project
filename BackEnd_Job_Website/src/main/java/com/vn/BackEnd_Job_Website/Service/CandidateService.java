package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;


public interface CandidateService {

    Candidate addCV(MultipartFile file, HttpServletRequest request) throws Exception;

    Candidate getCV(int fileId) throws FileNotFoundException;
}
