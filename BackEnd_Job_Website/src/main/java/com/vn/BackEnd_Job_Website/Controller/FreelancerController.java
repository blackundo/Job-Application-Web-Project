package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.Freelancer;
import com.vn.BackEnd_Job_Website.Respository.FreelancerRepository;
import com.vn.BackEnd_Job_Website.Service.FreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("api")
public class FreelancerController {
    @Autowired
    private FreelancerRepository freelancerRepository;
    @Autowired
    private FreelancerService freelancerService;
    @GetMapping("/registerfreelancer")
    public String showRegistrationForm(Model model) {
        model.addAttribute("freelancer", new Freelancer());
        return "freelancer-registration";
    }

    @PostMapping("/registerfreelancer")
    public String registerFreelancer(Freelancer freelancer) {
        freelancerRepository.save(freelancer);
        return "redirect:/login";
    }
    @GetMapping("/update-profile")
    public String showUpdateProfileForm(Model model, Principal principal) {
        if (principal != null) {
            String username = principal.getName();
            Freelancer freelancer = freelancerService.getFreelancerByEmail(username);

            if (freelancer != null) {
                model.addAttribute("freelancer", freelancer);
                return "update-profile";
            }
        }

        return "redirect:/login";
    }

    @PostMapping("/update-profile")
    public String updateProfile(@ModelAttribute Freelancer updatedFreelancer) {
        Freelancer updated = freelancerService.updateFreelancerProfile(updatedFreelancer);
        return "redirect:/profile";
    }
}

