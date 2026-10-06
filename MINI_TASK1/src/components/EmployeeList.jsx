import React from "react";

const EmployeeList = ({data , onDelete}) => {
    return (
        <>
            <div>
                {data.map((emp) => (
                    <div key={emp.id}>
                        <p>Name: {emp.name}</p>
                        <p>Role: {emp.role}</p>
                        <p>Salary: {emp.salary}</p>
                        <button onClick={() => onDelete(emp.id)}>Delete</button>
                        <br />
                    </div>
                ))}
            </div>
        </>
    )
}

export default EmployeeList;