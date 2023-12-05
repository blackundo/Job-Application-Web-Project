package com.vn.BackEnd_Job_Website.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
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

    @Column(name = "Avatar")
    private String avatar;

    @Column(name = "Cover")
    private String cover;

}