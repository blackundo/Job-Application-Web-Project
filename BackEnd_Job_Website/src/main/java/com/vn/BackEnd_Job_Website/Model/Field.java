package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Field {
    @Id
    @Column(name = "FieldID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "FieldName")
    private String fieldName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SpecializationID")
    private SpecializationField specializationID;

}