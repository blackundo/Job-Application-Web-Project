package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.ApplyHire;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ApplyHireRepository extends JpaRepository<ApplyHire, Integer> {

    Optional<ApplyHire> findByHiringID_CompanyID(Company company);

    Optional<ApplyHire> findByHiringID_CompanyIDAndHiringID_Id(Company company, Integer hiringID);
}