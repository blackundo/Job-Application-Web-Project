package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.JobApplication;

import java.util.List;

public interface JobApplicationService {
    List<JobApplication> getAllApplications();
    JobApplication getApplicationById(Long id);
    void saveApplication(JobApplication application);
    void deleteApplication(Long id);
}

