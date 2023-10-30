package com.vn.BackEnd_Job_Website.Service.impl;

import com.vn.BackEnd_Job_Website.Model.Freelancer;
import com.vn.BackEnd_Job_Website.Respository.FreelancerRepository;
import com.vn.BackEnd_Job_Website.Service.FreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FreelancerServiceImpl implements FreelancerService {

    private final FreelancerRepository freelancerRepository;

    @Autowired
    public FreelancerServiceImpl(FreelancerRepository freelancerRepository) {
        this.freelancerRepository = freelancerRepository;
    }

    @Override
    public Freelancer getFreelancerByEmail(String email) {
        return freelancerRepository.findByEmail(email);
    }

    @Override
    public Freelancer updateFreelancerProfile(Freelancer updatedFreelancer) {
        return freelancerRepository.save(updatedFreelancer);
    }
}
