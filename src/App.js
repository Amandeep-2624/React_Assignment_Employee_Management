import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';

const App = () => {
  return (
    // Setting up the router
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<EmployeeList/>} />
          {/* Route for adding a new employee */}
          <Route path="/add" element={<AddEmployee/>} />
          {/* Route for listing all employees */}
          <Route path="/list" element={<EmployeeList/>} />
          {/* Route for editing an employee */}
          <Route path="/edit/:employee" element={<EditEmployee/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
