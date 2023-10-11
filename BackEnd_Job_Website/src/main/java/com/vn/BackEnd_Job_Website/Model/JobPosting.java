package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class JobPosting {
    @Id
    @Column(name = "jobPostingID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "title")
    private String title;

    @Nationalized
    @Column(name = "description", length = 1000)
    private String description;

    @Nationalized
    @Column(name = "requirements", length = 1000)
    private String requirements;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employerID")
    private Employer employerID;

}