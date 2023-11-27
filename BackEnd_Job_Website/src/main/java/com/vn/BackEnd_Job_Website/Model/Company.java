package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CompanyID", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AccountID")
    private Account account;

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
    private Integer fouding;

    @Column(name = "BusinessEmail")
    private String businessEmail;

    @Column(name = "Organizational")
    private String organizational;

    @Column(name = "PhoneNumber")
    private String phoneNumber;

    @Lob
    @Column(name = "Avatar")
    private byte[] avatar;

    @Lob
    @Column(name = "Cover")
    private byte[] cover;

}