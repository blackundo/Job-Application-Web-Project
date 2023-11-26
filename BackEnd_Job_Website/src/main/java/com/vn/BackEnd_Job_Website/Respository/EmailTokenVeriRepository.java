package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.EmailTokenVeri;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface EmailTokenVeriRepository extends JpaRepository<EmailTokenVeri, UUID> {
    Optional<EmailTokenVeri> findByAccount(Account account);
}
