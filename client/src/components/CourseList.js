import Course from "./Course";

const CourseList = ({courselist, onCourseSelected}) => {

    const handleChange = event => {
        onCourseSelected(event.target.value)
      }

    return (
        <select defaultValue="" onChange={handleChange}>
          <option value="" >Choose a course</option>
          {courselist.map(courselist => {
            return (
              <option key={courselist.id} value={courselist.id}>{courselist.name}</option>
            )
          })}
        </select>
    )
}
export default CourseList;