import React, { Component } from "react";
import Registration from "./Screens/Registration";
import Login from "./Screens/Login";
import SignUp from "./Screens/signUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
