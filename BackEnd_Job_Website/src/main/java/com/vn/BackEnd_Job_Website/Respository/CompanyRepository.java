package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    @Query(value = "select c from Company c where c.account.id = :id")
    Optional<Company> findByAccountID(Integer id);

    @Transactional
    @Modifying
    @Query("update Company c set c.avatar = ?1 where c.id = ?2")
    void uploadAvatarByAccountID(@NonNull byte[] avatar, @NonNull Integer id);

    @Transactional
    @Modifying
    @Query("update Company c set c.cover = ?1 where c.id = ?2")
    void uploadCoverByAccountID(@NonNull byte[] cover, @NonNull Integer id);
}
