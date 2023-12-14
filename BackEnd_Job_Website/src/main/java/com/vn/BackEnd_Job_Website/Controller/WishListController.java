package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wish")
@RequiredArgsConstructor
public class WishListController {
    private final CandidateRepository candidateRepository;
    private final WishListRepository wishListRepository;

    @GetMapping("/")
    public ResponseEntity<?> get_wish(){
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId()).orElseThrow();
        List<WishList> list = wishListRepository.findByCandidateID_Id(candidate.getId());
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
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
