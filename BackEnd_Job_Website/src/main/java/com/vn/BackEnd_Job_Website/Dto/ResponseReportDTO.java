package com.vn.BackEnd_Job_Website.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseReportDTO {
    Long jobs;
    Long jobsClose;
    Long jobsOpen;
}
