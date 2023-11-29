package com.vn.BackEnd_Job_Website.Dto;

public record CandidateRecord(String fullname,
                              Integer age,
                              String fieldName,
                              Boolean gender,
                              String universityOrCollege,
                              String city,
                              char exp,
                              String skills) {
}
