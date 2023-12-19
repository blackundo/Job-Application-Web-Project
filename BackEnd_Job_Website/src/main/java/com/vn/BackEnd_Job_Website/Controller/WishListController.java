package com.vn.BackEnd_Job_Website.Controller;

import com.amazonaws.services.kms.model.NotFoundException;
import com.vn.BackEnd_Job_Website.Model.*;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import com.vn.BackEnd_Job_Website.Respository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/wish")
@RequiredArgsConstructor
public class WishListController {
    private final CandidateRepository candidateRepository;
    private final WishListRepository wishListRepository;
    private final HiringRepository hiringRepository;

    @GetMapping("/")
    public ResponseEntity<?> get_wish(){
        try {
            Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Candidate candidate = candidateRepository.findByAccountID(account.getId())
                    .orElseThrow(() -> new NotFoundException("Candidate not found")); // Tạo exception NotFound khi không tìm thấy Candidate
            List<WishList> list = wishListRepository.findByCandidateID_Id(candidate.getId());
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error fetching wish list: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param requestBody hiring_id
     * @return
     */
    @PostMapping("/add")
    public ResponseEntity<?> addWish(@RequestBody Map<String, Integer> requestBody) {
        try {
            Integer hiringId = requestBody.get("hiring_id");
            if (hiringId == null) {
                return new ResponseEntity<>("Hiring ID is required", HttpStatus.BAD_REQUEST);
            }

            Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Candidate candidate = candidateRepository.findByAccountID(account.getId())
                    .orElseThrow(() -> new NotFoundException("Candidate not found"));

            var hiring = hiringRepository.findById(hiringId)
                    .orElseThrow(() -> new NotFoundException("Hiring not found"));

            Optional<WishList> wishListExist = wishListRepository.findByHiringIDAndAndCandidateID(hiring, candidate);
            if(!wishListExist.isEmpty()){
                return new ResponseEntity<>("You was wish", HttpStatus.INTERNAL_SERVER_ERROR);
            }


            WishList wishList = new WishList(null, candidate, hiring);
            wishListRepository.save(wishList);

            return new ResponseEntity<>("Added to wishlist successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding to wishlist: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> unWish(@PathVariable Integer id){
        if (id == null) {
            return new ResponseEntity<>("Hiring ID is required", HttpStatus.BAD_REQUEST);
        }
        Account account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Candidate candidate = candidateRepository.findByAccountID(account.getId())
                .orElseThrow(() -> new NotFoundException("Candidate not found"));

        var hiring = hiringRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Hiring not found"));

        Optional<WishList> wishList = wishListRepository.findByHiringIDAndAndCandidateID(hiring, candidate);
        if(!wishList.isEmpty()){
            wishListRepository.delete(wishList.get());
            return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>("No entity ", HttpStatus.BAD_REQUEST);
        }
    }
}
