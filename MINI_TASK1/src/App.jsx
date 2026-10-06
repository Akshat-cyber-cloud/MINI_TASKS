import React, {useState} from "react";
import EmployeeList from "./Components/EmployeeList";

const employeeList = [
  {
    id: 1,
    name: "Akshat",
    role: "Software Developer",
    salary: "1000000"
  },
  {
    id: 2,
    name: "Arjun",
    role: "Marketing",
    salary: "800000"
  },
  {
    id: 3,
    name: "Shubham",
    role: "Sales",
    salary: "750000"
  },
  {
    id: 4,
    name: "Harsh",
    role: "HR",
    salary: "600000"
  },
]

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState("All");
    const [employees , setEmployees] = useState(employeeList);

    const filteredEmployees = employees
    .filter((emp) => emp.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((emp) => selectedRole === "All" ? true : emp.role === selectedRole);

    const handleDelete = (id) => {
      setEmployees(employees.filter((emp) => emp.id !== id))
    };

  return(
    <>
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Employee"
      />

      <select value={selectedRole} onChange={(e)=>setSelectedRole(e.target.value)}>
        <option value="All">All</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="HR">HR</option>
      </select>

       <EmployeeList  data = {filteredEmployees} onDelete = {handleDelete}/>
    </>
  )
}

export default App;