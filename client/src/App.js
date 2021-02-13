import './App.css';
import BookingsBox from './containers/BookingsBox';
import CoursesBox from './containers/CoursesBox';
import CustomersBox from './containers/CustomersBox';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
        <Router>
          <>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/customers" component={CustomersBox} />
           <Route path="/courses" component={CoursesBox} />
           <Route path="/bookings" component={BookingsBox} />
           </>
        </Router>
  );
}

export default App;

