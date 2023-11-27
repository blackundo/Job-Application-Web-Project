package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import com.vn.BackEnd_Job_Website.Model.WishList;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wish")
@RequiredArgsConstructor
public class WishListController {
    private final CandidateRepository candidateRepository;
    private final WishListRepository wishListRepository;
    @PostMapping("/")
    public void wished(@RequestBody Hiring hiring){
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow();
        WishList wishList = new WishList(null, candidate, hiring);
        wishListRepository.save(wishList);
    }

    @DeleteMapping("/")
    public void wishes(@RequestBody Hiring hiring){
        WishList wishList = wishListRepository.findByHiringID(hiring.getId()).orElseThrow();
        wishListRepository.delete(wishList);
    }
}
