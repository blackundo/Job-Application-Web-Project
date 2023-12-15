package com.vn.BackEnd_Job_Website.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ApplyHire {
    @Id
    @Column(name = "ApplyID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CandidateID")
    private Candidate candidateID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringID")
    @JsonIgnore
    private Hiring hiringID;

    @JoinColumn(name = "Status")
    private String status;

    public ApplyHire(Candidate candidateID, Hiring hiringID, String status) {
        this.candidateID = candidateID;
        this.hiringID = hiringID;
        this.status = status;
    }

    public String toString(){

        return null;
    }
}