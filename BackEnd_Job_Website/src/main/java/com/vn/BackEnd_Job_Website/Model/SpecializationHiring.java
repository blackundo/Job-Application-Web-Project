package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class SpecializationHiring {
    @Id
    @Column(name = "SpecializationHiringID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "SpecializationName")
    private String specializationName;

}