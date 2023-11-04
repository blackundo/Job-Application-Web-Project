package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
}
