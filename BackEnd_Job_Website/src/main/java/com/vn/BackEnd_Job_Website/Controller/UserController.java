package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Dto.ChangePasswordDTO;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDTO request) {
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        service.changePassword(request, account);
        return ResponseEntity.ok().build();
    }
}
