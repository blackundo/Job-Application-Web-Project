package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Conversation {
    @Id
    @Column(name = "conversationID", nullable = false)
    private Integer id;

    //TODO [JPA Buddy] generate columns from DB
}