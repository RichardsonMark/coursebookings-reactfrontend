package com.example.codeclan.coursebookings.components;

import com.example.codeclan.coursebookings.models.Booking;
import com.example.codeclan.coursebookings.models.Course;
import com.example.codeclan.coursebookings.models.Customer;
import com.example.codeclan.coursebookings.repositories.BookingRepository;
import com.example.codeclan.coursebookings.repositories.CourseRepository;
import com.example.codeclan.coursebookings.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Course python = new Course("Introductory Python", "Glasgow", 5);
        courseRepository.save(python);
        Course javaScript = new Course("Intro_JavaScript", "Banknock", 3);
        courseRepository.save(javaScript);

        Course origami = new Course("Origami", "Glasgow", 4);
        courseRepository.save(origami);

        Customer jackie = new Customer("Jackie Weaver", "Edinburgh", 56);
        customerRepository.save(jackie);

        Customer sarah = new Customer("Sarah Smith", "Edinburgh", 56);
        customerRepository.save(sarah);

        Customer mark = new Customer("Mark", "Leven", 28);
        customerRepository.save(mark);

        Booking booking2 = new Booking("18/02/2021", python, mark);
        bookingRepository.save(booking2);

        Booking booking1 = new Booking("23/02/2021", origami, jackie);
        bookingRepository.save(booking1);

        Booking booking3 = new Booking("04/04/2021", origami, mark);
        bookingRepository.save(booking3);
    }
}
