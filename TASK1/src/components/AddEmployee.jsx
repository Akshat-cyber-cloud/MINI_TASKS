import React, { useState } from "react";

const AddEmployee = ({onAddEmployee}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        position: "",
        status: "",
        salary: ""
    });

    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(onAddEmployee){
            onAddEmployee({
                ...formData,
                id: Date.now(),
                salary: Number(formData.salary)
            });
        }

        setFormData({
            name: "",
            email: "",
            department: "",
            position: "",
            status: "",
            salary: ""
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleData}
                    placeholder="Enter Your Name"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleData}
                    placeholder="Enter your mail"
                />

                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleData}
                    placeholder="Enter your department"
                />

                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleData}
                    placeholder="Enter your Position"
                />

                <select name="status" value={formData.status} onChange={formData}>
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleData}
                    placeholder="Enter your salary"
                />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddEmployee;
