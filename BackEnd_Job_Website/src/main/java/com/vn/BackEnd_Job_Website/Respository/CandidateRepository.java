package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    @Transactional
    @Modifying
    @Query("update Candidate c set c.uploadFileCV = ?1 where c.account.id  = ?2")
    void updateUploadFileCVById(@NonNull String uploadFileCV, @NonNull Integer id);
    @Query(value = "select c from Candidate c where c.account.id = :id")
    Optional<Candidate> findByAccountID(Integer id);

    List<Company> findByAccountStatusIsFalse();
}
