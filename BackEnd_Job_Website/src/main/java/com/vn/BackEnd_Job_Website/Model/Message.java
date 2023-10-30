package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.Instant;

@Getter
@Setter
@Entity
public class Message {
    @Id
    @Column(name = "messageID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "content", length = 1000)
    private String content;

    @Column(name = "\"timestamp\"")
    private Instant timestamp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conversationID")
    private Conversation conversationID;

}