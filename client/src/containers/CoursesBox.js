import { useState, useEffect } from "react";
import CourseList from "../components/CourseList";
import Course from "../components/Course";


const CoursesBox = () => {


    const [courselist, setCourseList] = useState([]);
    const [selectedCourseid, setSelectedCourseid] = useState('')



    const getCourseList = () => {
        console.log("getting course list info...")
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
                setCourseList(data);
                console.log(data)

            })
    };

    useEffect(() => {
        getCourseList();
    }, []);


    if (!courselist) return null;

    const handleCourseSelected = id => {
        setSelectedCourseid(id)
      }

    const selectedCourse = courselist.find(course => course.id === selectedCourseid)


    return (
        <>
            <h1>Courses</h1>
            <CourseList courselist={courselist}  onCourseSelected={handleCourseSelected} />
            <Course course={selectedCourse}  />            
        </>
    )
}

export default CoursesBox;