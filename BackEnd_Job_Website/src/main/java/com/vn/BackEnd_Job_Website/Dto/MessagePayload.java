package com.vn.BackEnd_Job_Website.Dto;

public record MessagePayload(Integer senderId,
                             Integer recipientId,
                             String content) {
}
