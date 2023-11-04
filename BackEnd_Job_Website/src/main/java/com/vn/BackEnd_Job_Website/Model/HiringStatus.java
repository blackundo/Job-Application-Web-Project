package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class HiringStatus {
    @Id
    @Column(name = "StatusID", nullable = false)
    private Integer id;

    @Column(name = "StatusName", length = 20)
    private String statusName;

}