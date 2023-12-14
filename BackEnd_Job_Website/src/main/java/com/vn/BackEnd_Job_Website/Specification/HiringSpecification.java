package com.vn.BackEnd_Job_Website.Specification;

import com.vn.BackEnd_Job_Website.Model.Hiring;
import org.springframework.data.jpa.domain.Specification;

public class HiringSpecification {
    public static Specification<Hiring> titleContains(String text) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(root.get("hiringContentID").get("title"), "%" + text + "%");
    }

    public static Specification<Hiring> salaryLessThanOrEqualTo(double salary) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.lessThanOrEqualTo(root.get("minSalary"), salary);
    }

    public static Specification<Hiring> nameContains(String text) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(root.get("hiringName"), "%" + text + "%");
    }

    public static Specification<Hiring> addressContains(String text) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(root.get("companyID").get("address"), "%" + text + "%");
    }

    public static Specification<Hiring> errollmentStatus(String text) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(root.get("errollmentStatus"), "%" + text + "%");
    }
}
