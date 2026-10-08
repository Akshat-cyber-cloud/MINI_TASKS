import React, {useState} from "react";
import EmployeeList from "./Components/EmployeeList";
import AddEmployee from "./Components/AddEmployee";

const employeeList = [
  {
    id: 1,
    name: "Ayash",
    role: "Dev",
    salary: 100
  },
  {
    id: 3,
    name: "Aman",
    role: "Sales",
    salary: 200
  },
  {
    id: 4,
    name: "Karan",
    role: "HR",
    salary: 250
  },
  {
    id: 5,
    name: "Akash",
    role: "Dev",
    salary: 300
  },
];

const App = () => {
  const [searchQuery , setSearchQuery] = useState("");
  const [selectedRole , setSelectedRole] = useState("All");
  const [employees, setEmployees] = useState(employeeList);

  const filteredEmplyeeList = employees
  .filter((emp) => emp.name.toLowerCase().includes(searchQuery.toLowerCase()))
  .filter((emp) => selectedRole === "All" || emp.role === selectedRole);


  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }

  const handleAdd = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <>
      <input 
        type="text"
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        placeholder="Enter the name"
      />

      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="All">All</option>
        <option value="Dev">Developer</option>
        <option value="Sales">Sales</option>
        <option value="HR">HR</option>
      </select>

      <AddEmployee onAdd={handleAdd}/>
      <EmployeeList data={filteredEmplyeeList} onDelete = {handleDelete}/>
    </>
  )
}

export default App