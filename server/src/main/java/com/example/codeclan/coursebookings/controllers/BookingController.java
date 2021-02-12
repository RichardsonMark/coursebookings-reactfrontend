package com.example.codeclan.coursebookings.controllers;

import com.example.codeclan.coursebookings.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/bookings")
    public ResponseEntity getAllBookings(
                @RequestParam(name="date", required = false) String date
    ) {
        if (date != null) {
            return new ResponseEntity(bookingRepository.findByDateIgnoreCase(date), HttpStatus.OK);
        }
        return new ResponseEntity(bookingRepository.findAll(), HttpStatus.OK);
    }
}
