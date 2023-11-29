package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.web.multipart.MultipartFile;

public interface CompanyService {
    Company addAvatar(MultipartFile avatar) throws Exception;

    Company addCover(MultipartFile cover) throws Exception;
}
