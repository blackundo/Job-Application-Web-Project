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
public class HiringContent {
    @Id
    @Column(name = "HiringContentID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "Title")
    private String title;

    @Nationalized
    @Column(name = "Content", length = 1000)
    private String content;

}