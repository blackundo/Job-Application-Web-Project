package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface HiringRepository extends PagingAndSortingRepository<Hiring, Integer>,
                                    JpaRepository<Hiring, Integer>,
                                    JpaSpecificationExecutor<Hiring> {
    @Query(value = "select h from Hiring h where h.companyID.id = :id")
    Page<Hiring> findByCompanyID(Integer id, Pageable pageable);

    List<Hiring> findByStatus(String open);
}
