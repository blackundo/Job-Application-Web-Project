package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.util.Set;

@Getter
@Setter
@Entity
public class UserAccount {
    @Id
    @Column(name = "userID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "name")
    private String name;

    @Nationalized
    @Column(name = "email")
    private String email;

    @Nationalized
    @Column(name = "password")
    private String password;

}