package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Hiring;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HiringRepository extends JpaRepository<Hiring, Integer> {
    Page<Hiring> findAll(Pageable pageable);
}
