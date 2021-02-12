const Customer = ({customer}) => {
    if (!customer) {
        return null
      }
    return (
        <div>
        <p>Name: {customer.name}</p>
        <p>Age {customer.age}</p>
        <p>Location: {customer.town}</p>
        <p>Bookings: {customer.bookings}</p>
        </div>
    )
}

export default Customer;