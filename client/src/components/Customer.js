const Customer = ({customer}) => {
    if (!customer) {
        return null
      }
    return (
        <div className="customer-info">
        <p>Name: {customer.name}</p>
        <p>{customer.town} </p>
        <p>Population {customer.age}</p>
        </div>
    )
}

export default Customer;