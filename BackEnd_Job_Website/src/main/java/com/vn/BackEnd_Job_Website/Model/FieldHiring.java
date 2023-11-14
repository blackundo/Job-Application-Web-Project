package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class FieldHiring {
    @Id
    @Column(name = "FieldHiringID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Nationalized
    @Column(name = "FieldName")
    private String fieldName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SpecializationHiringID")
    private SpecializationHiring specializationHiringID;

    public FieldHiring(String fieldName) {
        this.fieldName = fieldName;
    }
}