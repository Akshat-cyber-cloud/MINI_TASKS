import React from "react";

const DisplayPosts = ({data}) => {
    return (
        <>
            <div style={{"padding": "20px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                {data.map((post) => (
                    <div key={post.id} style={{"border" : "1px solid white" , "padding": "10px"}}>
                        <p><span>{post.id}</span></p>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayPosts;