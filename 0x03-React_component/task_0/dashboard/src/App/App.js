import React from "react";
import './App.css';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Login } from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: {__html: getLatestNotification()} },
];

class App extends React.Component {
  render() {
    const { isLoggedIn = false } = this.props;
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

// function App({ isLoggedIn = false }) {
//   return (
//     <React.Fragment>
//       <Notifications listNotifications={listNotifications} />
//       <Header />
//       <div className="App-body">
//         {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;