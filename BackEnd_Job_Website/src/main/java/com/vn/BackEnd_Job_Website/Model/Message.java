package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MessageID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ChatRoomID")
    private ChatRoom chatRoomID;

    @Column(name = "Content")
    private String content;

    @Column(name = "CreateAt")
    private LocalDateTime createAt = LocalDateTime.now();

}