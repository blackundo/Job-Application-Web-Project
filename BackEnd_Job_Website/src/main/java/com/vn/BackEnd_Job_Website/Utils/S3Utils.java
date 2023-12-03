package com.vn.BackEnd_Job_Website.Utils;

import com.amazonaws.services.s3.model.ObjectMetadata;
import com.vn.BackEnd_Job_Website.Exception.S3Exception;
import org.apache.http.entity.ContentType;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public class S3Utils {
    public static ObjectMetadata __fromMultipartFile__(MultipartFile file){
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(file.getContentType());
        metadata.setContentLength(file.getSize());
        return metadata;
    }

    public static String __getFileName__(MultipartFile file){
        return UUID.randomUUID().toString()+ "." + StringUtils.getFilenameExtension(file.getOriginalFilename());
    }
}
