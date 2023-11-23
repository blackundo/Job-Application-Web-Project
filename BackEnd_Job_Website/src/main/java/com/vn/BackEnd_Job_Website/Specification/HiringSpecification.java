package com.vn.BackEnd_Job_Website.Specification;

import com.vn.BackEnd_Job_Website.Model.Hiring;
import org.springframework.data.jpa.domain.Specification;

public class HiringSpecification {
    public static Specification<Hiring> titleContains(String text) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(root.get("hiringContentID").get("title"), "%" + text + "%");
    }

    public static Specification<Hiring> salaryGreaterThan(double salary) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.greaterThan(root.get("minSalary"), salary);
    }
}
