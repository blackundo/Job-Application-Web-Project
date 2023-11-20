package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Hiring {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HiringID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CompanyID")
    private Company companyID;

    @Nationalized
    @Column(name = "HiringName")
    private String hiringName;

    @Column(name = "ApplicationLimit")
    private Integer applicationLimit;

    @Column(name = "DateSubmit", nullable = false)
    private LocalDate dateSubmit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringContentID")
    private HiringContent hiringContentID;

    @Column(name = "DateEnd", nullable = false)
    private LocalDate dateEnd;

    @Column(name = "MinSlaray")
    private Double minSlaray;

    @Column(name = "MaxSlaray")
    private Double maxSlaray;

    @Column(name = "Status", nullable = false, length = 20)
    private String status;

    @Column(name = "FieldName")
    private String fieldName;

    public Hiring(Company companyID, String hiringName, Integer applicationLimit, LocalDate dateSubmit, HiringContent hiringContentID, HiringStatus statusID, FieldHiring fieldHiringID) {
        this.companyID = companyID;
        this.hiringName = hiringName;
        this.applicationLimit = applicationLimit;
        this.dateSubmit = dateSubmit;
        this.hiringContentID = hiringContentID;
    }
}