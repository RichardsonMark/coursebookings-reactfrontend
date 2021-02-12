package com.example.codeclan.coursebookings.repositories;

import com.example.codeclan.coursebookings.models.Course;
import com.example.codeclan.coursebookings.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
    List<Course> findByStarRating(int rating);
    List<Course> findByBookingsCustomerNameIgnoreCase(String name);
}
