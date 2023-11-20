package com.vn.BackEnd_Job_Website.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HiringPostDto {
    private Integer id;
    private Integer companyID;
    private String hiringName;
    private Integer applicationLimit;
    private LocalDate dateSubmit;
    private String titlePost;
    private String contentPost;
    private String status;
    private String fieldName;
}
