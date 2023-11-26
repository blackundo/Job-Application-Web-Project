package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ApplyStatus {
    @Id
    @Column(name = "ApplyStatusID", nullable = false)
    private Integer id;

    @Column(name = "Status", length = 20)
    private String status;

}