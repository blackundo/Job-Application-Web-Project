package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class EmailTokenVeri {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "Token", nullable = false)
    private UUID id;

    @Column(name = "CreatedAt")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AccountID")
    private Account account;

}