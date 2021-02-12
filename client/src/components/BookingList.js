import Booking from "./Booking";

const BookingList = ({bookinglist, onBookingSelected}) => {

    const handleChange = event => {
        onBookingSelected(event.target.value)
      }

    return (
        <select defaultValue="" onChange={handleChange}>
          <option value="" >Choose a booking</option>
          {bookinglist.map(bookinglist => {
            return (
              <option key={bookinglist.id} value={bookinglist.id}>{bookinglist.name}</option>
            )
          })}
        </select>
    )
}
export default BookingList;