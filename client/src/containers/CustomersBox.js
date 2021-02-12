import { useState, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import Customer from "../components/Customer";


const CustomersBox = () => {


    const [customerlist, setCustomerList] = useState([]);
    const [selectedCustomerid, setSelectedCustomerid] = useState('')



    const getCustomerList = () => {
        console.log("getting customer list info...")
        fetch('http://localhost:8080/customers')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCustomerList(data);
                console.log(data)

            })
    };

    useEffect(() => {
        getCustomerList();
    }, []);


    if (!customerlist) return null;

    const handleCustomerSelected = id => {
        setSelectedCustomerid(id)
      }

    const selectedCustomer = customerlist.find(customer => customer.id === selectedCustomerid)

    return (
        <>
            <h1>Course, Bookings and Customers</h1>
            <div>
            <p>Customers</p>
            <CustomerList customerlist={customerlist} onCustomerSelected={handleCustomerSelected} />
            <p>Customer details</p>
            <Customer customer={selectedCustomer}  />  
            </div>          
        </>
    )
}
export default CustomersBox;