import Customer from "./Customer";

const CustomerList = ({customerlist, onCustomerSelected}) => {

    const handleChange = event => {
        onCustomerSelected(event.target.value)
      }

    return (
        <select defaultValue="" onChange={handleChange}>
          <option value="" >Choose a customer</option>
          {customerlist.map(customerlist => {
            return (
              <option key={customerlist.id} value={customerlist.id}>{customerlist.name}</option>
            )
          })}
        </select>
    )
}
export default CustomerList;