package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.WishList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface WishListRepository extends JpaRepository<WishList, Integer> {
    @Query(value = "select w from WishList w where w.hiringID.id = :id")
    Optional<WishList> findByHiringID(Integer id);
}
