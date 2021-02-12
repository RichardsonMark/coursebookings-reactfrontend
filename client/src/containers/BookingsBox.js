import { useState, useEffect } from "react";
import BookingList from "../components/BookingList";
import Booking from "../components/Booking";


const BookingsBox = () => {


    const [bookinglist, setBookingList] = useState([]);
    const [selectedBookingid, setSelectedBookingid] = useState('')



    const getBookingList = () => {
        console.log("getting booking list info...")
        fetch('http://localhost:8080/bookings', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setBookingList(data);
                console.log(data)

            })
    };

    useEffect(() => {
        getBookingList();
    }, []);


    if (!bookinglist) return null;

    const handleBookingSelected = id => {
        setSelectedBookingid(id)
      }

    const selectedBooking = bookinglist.find(booking => booking.id === selectedBookingid)


    return (
        <>
            <h1>Bookings</h1>
            <BookingList bookinglist={bookinglist} onBookingSelected={handleBookingSelected} />
            <Booking booking={selectedBooking}  />            
        </>
    )
}

export default BookingsBox;