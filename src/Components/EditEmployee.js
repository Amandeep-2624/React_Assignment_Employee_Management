import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../store/reducers/employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditEmployee.css';

const EditEmployee = () => {
  // Redux hook to dispatch actions
  const dispatch = useDispatch();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Getting employee data from URL params
  let { employee } = useParams();
  // Parsing the employee data
  console.log(JSON.parse(employee));
  employee = JSON.parse(employee);

  // State variables for employee data and errors
  const [id, setId] = useState(employee.id);
  const [fullName, setFullName] = useState(employee.fullName);
  const [birthdate, setBirthdate] = useState(employee.birthdate);
  const [department, setDepartment] = useState(employee.department);
  const [experience, setExperience] = useState(employee.experience);
  const [errors, setErrors] = useState({});

  // Function to handle editing an employee
  const handleEditEmployee = (e) => {
    e.preventDefault();
    // Validating form before dispatching edit action
    if (validateForm()) {
      dispatch(editEmployee({ id, fullName, birthdate, department, experience }));
      // Navigating back to the employee list after editing
      navigate('/list');
    }
  };

  // Function to handle canceling the edit
  const cancelHandler = () => {
    // Navigating back to the previous page
    return navigate('./');
  };

  // Function to validate form inputs
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!birthdate) {
      errors.birthdate = 'Birthdate is required';
      isValid = false;
    }

    if (!department.trim()) {
      errors.department = 'Department is required';
      isValid = false;
    }

    if (!experience.trim()) {
      errors.experience = 'Experience is required';
      isValid = false;
    } else if (isNaN(Number(experience))) {
      errors.experience = 'Experience must be a number';
      isValid = false;
    }

    // Setting errors state
    setErrors(errors);
    return isValid;
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleEditEmployee} className="edit-employee-form">
        {/* Input fields for editing employee data */}
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label>Birthdate:</label>
          <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          {errors.birthdate && <span className="error">{errors.birthdate}</span>}
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          {errors.department && <span className="error">{errors.department}</span>}
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
          {errors.experience && <span className="error">{errors.experience}</span>}
        </div>
        {/* Button group for submit and cancel */}
        <div className="button-group">
          <button type="submit" className="submit-button">Update Employee</button>
          <button onClick={cancelHandler} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
