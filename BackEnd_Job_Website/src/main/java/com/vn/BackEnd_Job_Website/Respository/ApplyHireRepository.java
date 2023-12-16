package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.ApplyHire;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface ApplyHireRepository extends JpaRepository<ApplyHire, Integer>,
        PagingAndSortingRepository<ApplyHire, Integer> {

    Page<ApplyHire> findByHiringID_CompanyID(Company company, Pageable pageable);

    Optional<ApplyHire> findByHiringID_CompanyIDAndHiringID_Id(Company company, Integer hiringID);

    Optional<ApplyHire> findByCandidateID_IdAndHiringID_Id(Integer candidate_id, Integer hiring_id);
}
