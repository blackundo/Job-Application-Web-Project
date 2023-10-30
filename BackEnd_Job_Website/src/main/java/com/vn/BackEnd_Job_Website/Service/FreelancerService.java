package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Freelancer;

public interface FreelancerService {
    Freelancer getFreelancerByEmail(String email);
    Freelancer updateFreelancerProfile(Freelancer updatedFreelancer);
}
