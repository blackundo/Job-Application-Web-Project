package com.vn.BackEnd_Job_Website.Dto;

public record ChatNotification(Integer id,
                               Integer senderId,
                               Integer recipientId,
                               String content) {
}
