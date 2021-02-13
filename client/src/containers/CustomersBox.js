import { useState, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import Customer from "../components/Customer";


const CustomersBox = () => {


    const [customerlist, setCustomerList] = useState([]);
    const [selectedCustomerid, setSelectedCustomerid] = useState("")
    const [loaded, setLoaded] = useState(false);


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
            .then(() => setLoaded(true));
    };

    useEffect(() => {
        getCustomerList();
    }, [selectedCustomerid]);


    if (!customerlist) return null;
    console.log(customerlist)

    const handleCustomerSelected = id => {
        setSelectedCustomerid(id)
      }

    const selectedCustomer = customerlist.find(customer => customer.id === selectedCustomerid)
    console.log(selectedCustomer)

    return (
        <>
            <h1>Course, Bookings and Customers</h1>
            <div>
            <p>Customers</p>
            <CustomerList customerlist={customerlist} onCustomerSelected={handleCustomerSelected} />
            <p>Customer details</p>
            <Customer customer={customerlist}  />  
            </div>          
        </>
    )
}
export default CustomersBox;