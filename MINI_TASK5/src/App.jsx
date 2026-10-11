import React, {useState} from "react";
import EmployeeTable from "./components/EmployeeTable";

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

  const[employees , setEmployees] = useState(initialEmployees);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }

  return (
    <>
      <div>
        <h1 style={{"textAlign" : "center"}}>Employees Management Dashboard</h1>
        {/* <p>Total Employees: {employees.length}</p> */}

        <EmployeeTable employees = {employees} onDelete = {handleDelete} />
      </div>
    </>
  )
}

export default App;