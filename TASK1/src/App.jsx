import React, { useState } from "react";
import DisplayList from "./components/displayList";
import AddEmployee from "./components/AddEmployee";

const dummyList = [
  {
    id: 1,
    name: "Akash Sharma",
    email: "akash@gmail.com",
    department: "Marketing",
    position: "Head of Marketing",
    status: "Active",
    salary: 1000000
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@gmail.com",
    department: "Engineering",
    position: "Frontend Lead",
    status: "Active",
    salary: 1400000
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan.v@gmail.com",
    department: "Human Resources",
    position: "HR Specialist",
    status: "Inactive",
    salary: 650000
  },
  {
    id: 4,
    name: "Sneha Rao",
    email: "sneha.rao@gmail.com",
    department: "Engineering",
    position: "Backend Developer",
    status: "Active",
    salary: 1150000
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    email: "vikram.m@gmail.com",
    department: "Finance",
    position: "Financial Analyst",
    status: "Active",
    salary: 900000
  }
];


const App = () => {

  const[employees , setEmployees] = useState(dummyList);

  const handleAddEmployee = (newEmp) => {
    setEmployees((prev) => [newEmp, ...prev]);
  }

  return (
    <>
      <AddEmployee onAddEmployee={handleAddEmployee} />
      <DisplayList data={dummyList} />
    </>
  )
}

export default App;