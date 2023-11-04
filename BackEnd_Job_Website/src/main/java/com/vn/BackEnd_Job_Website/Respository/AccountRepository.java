package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer> {

    Optional<Account> findByEmail(String email);
}
