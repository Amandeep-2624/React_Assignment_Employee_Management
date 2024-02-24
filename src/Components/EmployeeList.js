import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../store/reducers/employeeSlice";
import '../styles/EmployeeList.css'
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const EmployeeList = () => {
  // Redux hook to dispatch actions
  const dispatch = useDispatch();
  // Redux hook to access store
  const store = useSelector((state) => state.store);

  // Function to handle deleting an employee
  const deleteHandler = (id) => {
    // Dispatching action to delete employee
    dispatch(deleteEmployee({ id }));
    // Showing toast notification for deletion
    toast.warning('Employee Deleted');
  };

  return (
    <div className="table-container">
      <h2>Employee List</h2>
      {/* Table to display employee data */}
      <table className="employee-table">
        <thead>
          <tr className="rowHeading">
            <th>Name</th>
            <th>Birthdate</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through employee data and displaying in table rows */}
          {store &&
            store.employees.map((employee, index) => {
              return (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{employee.fullName}</td>
                  <td>{employee.birthdate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.experience}</td>
                  <td>
                    {/* Link to edit employee details */}
                    <Link to={`/edit/${JSON.stringify(employee)}`} className="link-button"> <button> Edit </button></Link>
                    {/* Button to delete employee */}
                    <button onClick={() => deleteHandler(employee.id)} className="delete">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
