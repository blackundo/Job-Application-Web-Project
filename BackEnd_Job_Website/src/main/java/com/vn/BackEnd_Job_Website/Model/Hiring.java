package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Hiring {
    @Id
    @Column(name = "HiringID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CompanyID")
    private Company companyID;

    @Nationalized
    @Column(name = "HiringName")
    private String hiringName;

    @Column(name = "ApplicationLimit")
    private Integer applicationLimit;

    @Column(name = "DateSubmit")
    private LocalDate dateSubmit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringContentID")
    private HiringContent hiringContentID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "StatusID")
    private HiringStatus statusID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FieldHiringID")
    private FieldHiring fieldHiringID;

    public Hiring(Company companyID, String hiringName, Integer applicationLimit, LocalDate dateSubmit, HiringContent hiringContentID, HiringStatus statusID, FieldHiring fieldHiringID) {
        this.companyID = companyID;
        this.hiringName = hiringName;
        this.applicationLimit = applicationLimit;
        this.dateSubmit = dateSubmit;
        this.hiringContentID = hiringContentID;
        this.statusID = statusID;
        this.fieldHiringID = fieldHiringID;
    }
}