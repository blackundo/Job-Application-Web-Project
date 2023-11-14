package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    @Query(value = "select c from Company c where c.accountID.id = :id")
    Optional<Company> findByAccountID(Integer id);
}
