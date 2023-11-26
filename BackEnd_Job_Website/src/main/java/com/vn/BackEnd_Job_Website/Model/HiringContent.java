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
public class HiringContent {
    @Id
    @Column(name = "HiringContentID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Nationalized
    @Column(name = "Title")
    private String title;

    @Nationalized
    @Column(name = "Content", length = 1000)
    private String content;

    public HiringContent(String title, String content) {
        this.title = title;
        this.content = content;
    }
}