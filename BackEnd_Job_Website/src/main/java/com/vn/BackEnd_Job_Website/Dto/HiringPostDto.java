package com.vn.BackEnd_Job_Website.Dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HiringPostDto {
    private String hiringName;
    private Integer applicationLimit;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dateEnd;
    private String titlePost;
    private String contentPost;
    private String status;
    private String fieldName;
    private Double minSalary;
    private Double maxSalary;
    private String errollmentStatus;
}
