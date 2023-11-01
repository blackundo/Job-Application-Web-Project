package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CandidateID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "Fullname")
    private String fullname;

    @Column(name = "Age")
    private Integer age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FieldID")
    private Field fieldID;

    @Column(name = "Gender")
    private Boolean gender;

    @Nationalized
    @Column(name = "UniversityOrCollege")
    private String universityOrCollege;

    @Nationalized
    @Column(name = "City")
    private String city;

    @Column(name = "UploadFileCV")
    private byte[] uploadFileCV;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ExperienceID")
    private Experience experienceID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AccountID")
    private Account accountID;

}