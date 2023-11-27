package com.vn.BackEnd_Job_Website.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    @JoinColumn(name = "CompanyID")
    private Company companyID;

    @Nationalized
    @Column(name = "HiringName")
    private String hiringName;

    @Column(name = "ApplicationLimit")
    private Integer applicationLimit;

    @Column(name = "DateSubmit", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateSubmit;

    @Column(name = "DateEnd", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateEnd;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "HiringContentID")
    private HiringContent hiringContentID;

    @Column(name = "Status", nullable = false, length = 20)
    private String status;

    @Column(name = "FieldName")
    private String fieldName;

    @Column(name = "MinSalary")
    private Double minSalary;

    @Column(name = "MaxSalary")
    private Double maxSalary;

    @Column(name = "ErrollmentStatus")
    private String errollmentStatus;

    public Hiring(Company companyID, String hiringName, Integer applicationLimit, LocalDate dateSubmit, LocalDate dateEnd, HiringContent hiringContentID, String status, String fieldName, Double minSalary, Double maxSalary, String errollmentStatus) {
        this.companyID = companyID;
        this.hiringName = hiringName;
        this.applicationLimit = applicationLimit;
        this.dateSubmit = dateSubmit;
        this.dateEnd = dateEnd;
        this.hiringContentID = hiringContentID;
        this.status = status;
        this.fieldName = fieldName;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.errollmentStatus = errollmentStatus;
    }
}