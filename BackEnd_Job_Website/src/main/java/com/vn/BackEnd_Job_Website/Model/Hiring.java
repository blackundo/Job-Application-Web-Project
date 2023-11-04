package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Hiring {
    @Id
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

    @Column(name = "DateSubmit")
    private LocalDate dateSubmit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HiringContentID")
    private HiringContent hiringContentID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "StatusID")
    private HiringStatus statusID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FieldHiringID")
    private FieldHiring fieldHiringID;

}