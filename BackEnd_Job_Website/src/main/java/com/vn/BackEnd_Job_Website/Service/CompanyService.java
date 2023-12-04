package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Exception.S3Exception;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface CompanyService {
    void addAvatar(MultipartFile avatar, Account account) throws S3Exception;

    void addCover(MultipartFile cover, Account account) throws S3Exception;

    byte[] getAvatar(Integer id);

    byte[] getAvatarWithToken(Account account);

    byte[] getCover(Integer id);

    byte[] getCoverWithToken(Account account);
}
