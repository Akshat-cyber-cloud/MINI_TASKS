import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

const initialEmployees = [
  {
    id: 1,
    name: "Akshat Gupta",
    email: 'akshat@company.com',
    department: "Enginnering",
    salary: 85000
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@company.com",
    department: "HR",
    salary: 65000
  },
  {
    id: 3,
    name: "Raj Malhotra",
    email: "raj@company.com",
    department: "Finance",
    salary: 75000
  },
  {
    id: 4,
    name: "Pooja Verma",
    email: "pooja@company.com",
    department: "Marketing",
    salary: 70000
  },
  {
    id: 5,
    name: "Rahul Kumar",
    email: "rahul@company.com",
    department: "HR",
    salary: 60000
  }
];


const App = () => {

  const [employees, setEmployees] = useState(initialEmployees);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }

  const handleAdd = (newEmpData) => {
    const newEmployee = {
      ...newEmpData,
      id: Date.now(),
      salary: Number(newEmpData.salary)
    };

    setEmployees([newEmployee, ...employees]);
  };

  const handleUpdate = (updateEmp) => {
    const updatedList = employees.map((emp) => {
      if(emp.id === updateEmp.id){
        return updateEmp;
      }else{
        return emp;
      }
    });

    setEmployees(updatedList);
    setEditEmployee(null);
  }

  return (
    <>
      <div>
        <h1 style={{ "textAlign": "center" }}>Employees Management Dashboard</h1>
        {/* <p>Total Employees: {employees.length}</p> */}

        <EmployeeForm editEmployee={editEmployee} onSubmit={editEmployee ? handleUpdate : handleAdd} />
        <EmployeeTable employees={employees} onDelete={handleDelete} onEdit={setEditEmployee} />
      </div>
    </>
  )
}

export default App;