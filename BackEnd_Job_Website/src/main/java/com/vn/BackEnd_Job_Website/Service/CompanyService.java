package com.vn.BackEnd_Job_Website.Service;

import org.springframework.web.multipart.MultipartFile;

public interface CompanyService {
    void addAvatar(MultipartFile avatar) throws Exception;

    void addCover(MultipartFile cover) throws Exception;
}
