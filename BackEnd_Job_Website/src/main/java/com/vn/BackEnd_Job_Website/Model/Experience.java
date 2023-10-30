package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ExperienceID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "OldJobPosition")
    private String oldJobPosition;

    @Nationalized
    @Column(name = "Levels")
    private String levels;

}