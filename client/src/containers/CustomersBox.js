import { useState, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import Customer from "../components/Customer";


const CustomersBox = () => {


    const [customerlist, setCustomerList] = useState([]);


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


    return (
        <>
            <h1>Hello, World!</h1>
            <CustomerList customerlist={customerlist}  />
            <Customer Customer={customerlist}  />            
        </>
    )
}

export default CustomersBox;