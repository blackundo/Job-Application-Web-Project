package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.JobApplication;
import com.vn.BackEnd_Job_Website.Respository.JobApplicationRepository;
import com.vn.BackEnd_Job_Website.Service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class JobApplicationController {
    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private JobApplicationService jobApplicationService;

    @GetMapping("/apply")
    public String showApplicationForm(Model model) {
        model.addAttribute("jobApplication", new JobApplication());
        return "application-form";
    }

    @PostMapping("/apply")
    public String submitApplication(@ModelAttribute JobApplication jobApplication) {
        jobApplication.setApplicantID(jobApplication.getApplicantID());
        jobApplicationRepository.save(jobApplication);
        return "redirect:/applications";
    }

    @GetMapping("/applications")
    public String showApplications(Model model) {
        List<JobApplication> applications = jobApplicationRepository.findAll();
        model.addAttribute("applications", applications);
        return "applications-list";
    }
}

