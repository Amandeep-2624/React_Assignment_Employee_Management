import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../store/reducers/employeeSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/AddEmployee.css";

const AddEmployee = () => {
  // Redux hooks to access store and dispatch actions
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  // React Router hook for navigation
  const navigate = useNavigate();

  // State variables for form inputs and errors
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleAddEmployee = (e) => {
    e.preventDefault();
    let id;
    if (validateForm()) {
      // Generating id for the new employee
      if (store.employees.length === 0) {
        id = 0;
      } else {
        id = store.employees[store.employees.length - 1].id + 1;
      }

      // Dispatching action to add employee
      dispatch(
        addEmployee({ id, fullName, birthdate, department, experience })
      );

      // Navigating to the employee list page
      navigate("/list");
      // Showing success toast
      toast.success("Employee added successfully");
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validating full name
    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    // Validating birthdate
    if (!birthdate) {
      errors.birthdate = "Birthdate is required";
      isValid = false;
    }

    // Validating department
    if (!department.trim()) {
      errors.department = "Department is required";
      isValid = false;
    }

    // Validating experience
    if (!experience.trim()) {
      errors.experience = "Experience is required";
      isValid = false;
    } else if (isNaN(Number(experience))) {
      errors.experience = "Experience must be a number";
      isValid = false;
    }

    // Setting errors state
    setErrors(errors);
    return isValid;
  };

  return (
    <div className="Top-container">
      <h2>Add Employee</h2>
      <div className="add-employee-container">
        {" "}
        {/* Container for styling */}
        <form onSubmit={handleAddEmployee} className="add-employee-form">
          {" "}
          {/* Form styling */}
          {/* Full Name input field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>
          {/* Birthdate input field */}
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            {errors.birthdate && (
              <span className="error-message">{errors.birthdate}</span>
            )}
          </div>
          {/* Department input field */}
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            {errors.department && (
              <span className="error-message">{errors.department}</span>
            )}
          </div>
          {/* Experience input field */}
          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
            {errors.experience && (
              <span className="error-message">{errors.experience}</span>
            )}
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-button">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
