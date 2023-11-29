package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class ChatRoom {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "ChatID", length = 50)
    private String chatID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SenderID")
    private Account senderID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RecipientID")
    private Account recipientID;

}