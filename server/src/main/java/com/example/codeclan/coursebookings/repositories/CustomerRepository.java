package com.example.codeclan.coursebookings.repositories;

import com.example.codeclan.coursebookings.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByBookingsCourseName(String courseName);
//    List<Customer> findByBookingsCourseNameAndBookingsCourseTown(String courseName, String town);
    List<Customer> findByTownAndBookingsCourseName(String town, String courseName);
    List<Customer> findByTownAndAgeGreaterThanAndBookingsCourseName(String town, int age, String courseName);

}
