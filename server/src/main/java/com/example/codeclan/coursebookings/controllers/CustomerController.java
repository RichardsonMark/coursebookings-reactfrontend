package com.example.codeclan.coursebookings.controllers;


import com.example.codeclan.coursebookings.models.Customer;
import com.example.codeclan.coursebookings.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController{
    @Autowired
    CustomerRepository customerRepository;

    //GET /customers
    //GET /customers?courseName=origami
    @GetMapping(value="/customers")
    public ResponseEntity getAllCustomers(
            @RequestParam(name="courseName", required = false) String courseName,
            @RequestParam(name="town", required = false) String town,
            @RequestParam(name="age", required = false) Integer age
    ) {
        if(courseName != null && town == null && age == null){
            return new ResponseEntity(customerRepository.findByBookingsCourseName(courseName), HttpStatus.OK);
        }
        if(town != null && courseName != null && age == null) {
            return new ResponseEntity(customerRepository.findByTownAndBookingsCourseName(town, courseName), HttpStatus.OK);
        }
        if(age != null && courseName != null && town != null) {
            return new ResponseEntity(customerRepository.findByTownAndAgeGreaterThanAndBookingsCourseName(town, age, courseName), HttpStatus.OK);
        }
        return new ResponseEntity(customerRepository.findAll(), HttpStatus.OK);
    }

    //GET customers/{id}
    @GetMapping("customers/{id}")
    public ResponseEntity getCustomerById(@PathVariable Long id){
        return new ResponseEntity(customerRepository.findById(id), HttpStatus.OK);
    }

    //CREATE /customers
    @PostMapping("/customers")
    public ResponseEntity createCustomer(@RequestBody Customer customer){
        return new ResponseEntity(customerRepository.save(customer), HttpStatus.CREATED);
    }

}
