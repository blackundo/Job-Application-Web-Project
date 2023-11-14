package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HiringStatus {
    @Id
    @Column(name = "StatusID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "StatusName", length = 20)
    private String statusName;

    public HiringStatus(String statusName) {
        this.statusName = statusName;
    }
}