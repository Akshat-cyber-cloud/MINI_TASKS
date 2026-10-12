import React, { useEffect, useState } from "react";

const EmployeeForm = ({ onSubmit , editEmployee }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);

        setFormData({
            name: "",
            email: "",
            department: "",
            salary: ""
        });
    };

    useEffect(() => {
        if(editEmployee){
            setFormData(editEmployee); // Pre fills the data!!
        }else{
            setFormData({name: "" , email: "", department: "", salary: ""})
        }
    }, [editEmployee]); // Runs only when editEmployee changes!!

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", margin: "20px 0", flexWrap: "wrap" }}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                style={{ padding: "8px" }}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                style={{ padding: "8px" }}
            />
            <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                style={{ padding: "8px" }}
            />
            <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
                style={{ padding: "8px" }}
            />
            <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
                {editEmployee ? "Update Employee" : "Add Employee"}
            </button>
        </form>
    );
};

export default EmployeeForm;