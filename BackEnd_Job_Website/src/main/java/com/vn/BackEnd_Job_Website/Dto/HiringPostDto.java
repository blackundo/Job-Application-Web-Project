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
    private String hiringName;
    private Integer applicationLimit;
    private LocalDate dateSubmit;
    private LocalDate dateEnd;
    private String titlePost;
    private String contentPost;
    private Double minSalary;
    private Double maxSalary;
    private String status;
    private String fieldName;
}
