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

    @Column(name = "FieldName")
    private String fieldName;

    @Column(name = "Gender")
    private Boolean gender;

    @Nationalized
    @Column(name = "UniversityOrCollege")
    private String universityOrCollege;

    @Nationalized
    @Column(name = "City")
    private String city;

    @Column(name = "UploadFileCV")
    private String uploadFileCV;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "AccountID")
    private Account account;

    @Column(name = "Exp")
    private char exp;

    @Column(name = "SKILLS")
    private String skills;

}