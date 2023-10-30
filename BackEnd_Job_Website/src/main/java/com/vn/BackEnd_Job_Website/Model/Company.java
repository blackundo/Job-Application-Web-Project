package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Company {
    @Id
    @Column(name = "CompanyID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AccountID")
    private Account accountID;

    @Nationalized
    @Column(name = "CompanyName")
    private String companyName;

    @Column(name = "Introduction")
    private String introduction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MainFieldID")
    private MainField mainFieldID;

    @Nationalized
    @Column(name = "Address")
    private String address;

    @Column(name = "Fouding")
    private LocalDate fouding;

    @Column(name = "BusinessEmail")
    private String businessEmail;

    @Column(name = "Organizational")
    private String organizational;

    @Column(name = "PhoneNumber")
    private String phoneNumber;

}