const Course = ({course}) => {
    if (!course) {
        return null
      }
    return (
        <div>
        <p>Name: {course.name}</p>
        <p>Age {course.age}</p>
        <p>Location: {course.town}</p>
        <p>courses: {course.courses}</p>
        </div>
    )
}

export default Course;