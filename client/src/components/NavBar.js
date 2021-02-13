import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
      <li>
        <button onClick={goBack}>Back</button>
      </li>
    </ul>
  );
}

export default NavBar;