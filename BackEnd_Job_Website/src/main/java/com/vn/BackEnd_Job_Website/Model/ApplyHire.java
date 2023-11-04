package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ApplyHire {
    @Id
    @Column(name = "ApplyID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CandidateID")
    private Candidate candidateID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringID")
    private Hiring hiringID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ApplystatusID")
    private ApplyStatus applystatusID;

}