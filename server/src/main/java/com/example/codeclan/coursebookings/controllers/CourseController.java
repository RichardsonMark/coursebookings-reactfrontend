package com.example.codeclan.coursebookings.controllers;

import com.example.codeclan.coursebookings.models.Course;
import com.example.codeclan.coursebookings.models.Customer;
import com.example.codeclan.coursebookings.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    CourseRepository courseRepository;

    // GET /courses
    // GET /courses/{id}
    // GET courses?rating=5
    // POST /courses/{id}
    // PUT /courses/{id}
    // DELETE /courses

    @GetMapping(value="/courses")
    public ResponseEntity canGetAllCourses() {
        return new ResponseEntity(courseRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/courses/{rating}")
    public List<Course> getCoursesByStarRating(@PathVariable int rating) {
        return courseRepository.findByStarRating(rating);
    }

    @GetMapping(value = "/{name}/courses")
    public List<Course> getBookingsByCustomer(@PathVariable String name) {
        return courseRepository.findByBookingsCustomerNameIgnoreCase(name);
    }
}

