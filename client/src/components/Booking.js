const Booking = ({booking}) => {
    if (!booking) {
        return null
      }
    return (
        <div>
        <p>Name: {booking.name}</p>
        <p>Age {booking.age}</p>
        <p>Location: {booking.town}</p>
        <p>Bookings: {booking.bookings}</p>
        </div>
    )
}

export default Booking;