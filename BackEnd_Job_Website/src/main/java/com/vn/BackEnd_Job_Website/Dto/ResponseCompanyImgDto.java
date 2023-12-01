package com.vn.BackEnd_Job_Website.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseCompanyImgDto {
    private byte[] avatar;
    private byte[] cover;
}
