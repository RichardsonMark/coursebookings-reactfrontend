import './App.css';
import BookingsBox from './containers/BookingsBox';
import CoursesBox from './containers/CoursesBox';
import CustomersBox from './containers/CustomersBox';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
    <>
        <CustomersBox />
        <CoursesBox />
        <BookingsBox />
    </>
  );
}

export default App;
