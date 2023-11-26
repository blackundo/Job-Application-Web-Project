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
public class MainField {
    @Id
    @Column(name = "MainFieldID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "FieldName")
    private String fieldName;

    @Nationalized
    @Column(name = "InfoField")
    private String infoField;

    @Nationalized
    @Column(name = "Achievement")
    private String achievement;

    @Nationalized
    @Column(name = "ActiveTime")
    private String activeTime;

}