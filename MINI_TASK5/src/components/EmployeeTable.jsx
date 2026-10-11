import React from "react";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees , onDelete}) => {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <div className="emp-info">
                  <span className="emp-name">{emp.name}</span>
                  <span className="emp-email">{emp.email}</span>
                </div>
              </td>


              <td>
                <span className="dept-badge">{emp.department}</span>
              </td>

              <td className="emp-salary">₹{emp.salary.toLocaleString()}</td>

              <td>
                <div className="action-btns">
                  <button className="btn-edit"> Edit</button>
                  <button className="btn-delete" onClick={() => onDelete(emp.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
