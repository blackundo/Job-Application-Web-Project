package com.vn.BackEnd_Job_Website.Service.impl;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import com.vn.BackEnd_Job_Website.Exception.S3Exception;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Service.CompanyService;
import com.vn.BackEnd_Job_Website.Utils.S3Utils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;
    private final AmazonS3 s3;

    @Value("${aws.r2.buckets.avatar}")
    private String bucketAvatar;

    @Value("${aws.r2.buckets.cover}")
    private String bucketCover;

    @Override
    public void addAvatar(MultipartFile avatar, Account account) throws S3Exception {
//        String fileName = StringUtils.cleanPath(avatar.getOriginalFilename());
//        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        try {
//            if(fileName.contains("..")) {
//                throw new Exception("Filename contains invalid path sequence " + fileName);
//            }
//            companyRepository.uploadAvatarByAccountID(avatar.getBytes(), account.getId());
//            return null;
//        } catch (Exception e) {
//            throw new Exception("Could not save File: " + fileName);
//        }
//        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        try {
            if(avatar.isEmpty()) throw new S3Exception("Avatar not empty !!!");
            final String fileName = S3Utils.__getFileName__(avatar);
            s3.putObject(
                    new PutObjectRequest(bucketAvatar,
                            fileName,
                            avatar.getInputStream(),
                            S3Utils.__fromMultipartFile__(avatar)
                    )
            );

            companyRepository.uploadAvatarByAccountID(fileName, account.getId());

        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (Exception e){
            throw new S3Exception(e.getMessage());
        }
    }

    @Override
    public void addCover(MultipartFile cover, Account account) throws S3Exception {
        try {
            if(cover.isEmpty()) throw new S3Exception("Cover not empty !!!");
            final String fileName = S3Utils.__getFileName__(cover);
            s3.putObject(
                    new PutObjectRequest(bucketCover,
                            fileName,
                            cover.getInputStream(),
                            S3Utils.__fromMultipartFile__(cover)
                    )
            );

            companyRepository.uploadCoverByAccountID(fileName, account.getId());
        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (Exception e){
            throw new S3Exception(e.getMessage());
        }
    }

    @Override
    public byte[] getAvatar(Integer id){
        var company = companyRepository.findById(id).orElseThrow();

        try {
            S3Object object = s3.getObject(bucketAvatar, company.getAvatar());
            return IOUtils.toByteArray(object.getObjectContent());
        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (IOException e) {
            throw new S3Exception(e.getMessage());
        }
    }

    @Override
    public byte[] getAvatarWithToken(Account account) {
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        return getAvatar(company.getId());
    }

    @Override
    public byte[] getCover(Integer id){
        var company = companyRepository.findById(id).orElseThrow();

        try {
            S3Object object = s3.getObject(bucketCover, company.getCover());
            return IOUtils.toByteArray(object.getObjectContent());
        } catch (AmazonServiceException e) {
            throw new S3Exception(e.getMessage());
        } catch (IOException e) {
            throw new S3Exception(e.getMessage());
        }
    }
    @Override
    public byte[] getCoverWithToken(Account account) {
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        return getCover(company.getId());
    }


}
