package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRespository extends JpaRepository<UserAccount,Integer> {
    Optional<UserAccount> findOneByEmailAndPassword(String email, String password);
    UserAccount findByEmail(String email);
}
