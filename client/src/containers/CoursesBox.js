import { useState, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import Customer from "../components/Customer";


const CoursesBox = () => {


    const [courselist, setCourseList] = useState([]);


    const getCourseList = () => {
        console.log("getting customer list info...")
        fetch('http://localhost:8080/courses', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCustomerList(data);
                console.log(data)

            })
    };

    useEffect(() => {
        getCourseList();
    }, []);


    if (!courselist) return null;


    return (
        <>
            <h1>Hello, World!</h1>
            <CourseList courselist={courselist}  />
            <Course Course={courselist}  />            
        </>
    )
}

export default CoursesBox;