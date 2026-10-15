import React from "react";

const DisplayList = ({data}) => {
    return (
        <>
            <div>
                {data.map((item) => (
                    <div key={item.id} style={{"borderBottom" : "1px soild #ccccccd7" , "padding" : "10px 0"}}>
                        <h3>Name: {item.name}</h3>
                        <p>Email: {item.email}</p>
                        <p>Department: {item.position}</p>
                        <p>Status: {item.status}</p>
                        <p>Salary: {item.salary}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayList;