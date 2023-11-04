package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
public class HistoryHiring {
    @Id
    @Column(name = "HistoryJobID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CandidateID")
    private Candidate candidateID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringID")
    private Hiring hiringID;

    @Column(name = "CreateAtDate")
    private Instant createAtDate;

}