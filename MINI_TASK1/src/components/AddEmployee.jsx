import React, {useState} from "react";

const AddEmployee = ({onAdd}) => {
    const [employee , setEmployee] = useState({
        name: "",
        role: "",
        salary: "",
    })

    const handleInput = (e) => {
        setEmployee({...employee , [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        onAdd(employee);
        setEmployee({name: "", role: "", salary: ""});
    };

    return(
        <>
            <h3>Add New Employee</h3>
            <input 
                type="text" 
                name="name" 
                value={employee.name}
                onChange={handleInput}
                placeholder="Name" 
            />

            <input 
                type="text" 
                name="role" 
                value={employee.role}
                onChange={handleInput}
                placeholder="Role" 
            />
            <input 
                type="text" 
                name="salary" 
                value={employee.salary}
                onChange={handleInput}
                placeholder="Salary" 
            />
            <button onClick={handleSubmit}>Add Employee</button>
        </>
    )
}

export default AddEmployee