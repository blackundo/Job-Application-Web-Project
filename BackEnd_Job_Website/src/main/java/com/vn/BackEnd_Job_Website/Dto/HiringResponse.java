package com.vn.BackEnd_Job_Website.Dto;

import com.vn.BackEnd_Job_Website.Model.Hiring;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HiringResponse {
    private Hiring hiring;
    private Boolean wishlisted;
    private Boolean applied;
}
