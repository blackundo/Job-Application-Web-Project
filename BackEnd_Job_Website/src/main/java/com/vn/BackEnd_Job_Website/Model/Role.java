package com.vn.BackEnd_Job_Website.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Nationalized;
import org.hibernate.annotations.NaturalId;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roleID", nullable = false)
    private Integer id;

    @Column(name = "roleName")
    private String roleName;

    @JsonIgnore
    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.roleName));
        return authorities;
    }
}