package com.example.codeclan.coursebookings;

import com.example.codeclan.coursebookings.models.Booking;
import com.example.codeclan.coursebookings.models.Course;
import com.example.codeclan.coursebookings.models.Customer;
import com.example.codeclan.coursebookings.repositories.BookingRepository;
import com.example.codeclan.coursebookings.repositories.CourseRepository;
import com.example.codeclan.coursebookings.repositories.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class CoursebookingsApplicationTests {

	@Autowired
	CourseRepository courseRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateAndSaveBooking() {
		Course course = new Course("Python", "Leven", 5);
		courseRepository.save(course);

		Customer mark = new Customer("Mark", "Leven", 28);
		customerRepository.save(mark);

		Booking booking = new Booking("22/02/2020", course, mark);
		bookingRepository.save(booking);

	}

	@Test
	public void canFindCourseByBookingCustomerName(){
		List<Course>foundCourses = courseRepository.findByBookingsCustomerNameIgnoreCase("Mark");
		assertEquals(2,foundCourses.size());
	}

	@Test
	public void canFindCourseByRating() {
		List<Course> foundCourses = courseRepository.findByStarRating(3);
		assertEquals(1, foundCourses.size());
		assertEquals("Intro_JavaScript", foundCourses.get(0).getName());
	}

	@Test
	void canFindBookingByDate() {
		List<Booking> foundBookings = bookingRepository.findByDateIgnoreCase("23/02/2021");
		assertEquals(1, foundBookings.size());
		assertEquals("Origami", foundBookings.get(0).getCourse().getName());
	}

	@Test
	void canFindCustomersForACourse(){
		List<Customer> foundCustomers = customerRepository.findByBookingsCourseName("Origami");
		assertEquals(2, foundCustomers.size());
	}

//	@Test
//	void canFindCustomerForACourseAndTown() {
//		List<Customer> foundCustomers = customerRepository.findByBookingsCourseNameAndBookingsCourseTown("Origami", "Glasgow");
//		assertEquals(1, foundCustomers.size());
//	}


	@Test
	void canFindCustomerByTownAndCourseName() {
		List<Customer> foundCustomer = customerRepository.findByTownAndBookingsCourseName("Leven", "Origami");
		assertEquals(1, foundCustomer.size());
		assertEquals("Mark", foundCustomer.get(0).getName());
	}
}
