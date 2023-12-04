package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;


public interface CandidateService {

    void addCV(MultipartFile file, Account account);

    byte[] getCV(Integer id);
}
