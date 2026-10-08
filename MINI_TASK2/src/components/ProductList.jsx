import React from "react";

const ProductList = ({data}) => {
    return (
        <>
            <div>
                {data.map((product , index) => (
                    <div key={product.id} style={{border: "1px solid black" , marginBottom: "20px" , padding: "20px" }}>
                        <p>Item {index+1}</p> 
                        <h4 style={{fontSize: "1.5rem" , fontWeight: "bold"}}>Title: {product.title}</h4>
                        <p style={{fontFamily: "Roboto"}}>Category: {product.category}</p>
                        <p style={{fontFamily: "Roboto"}}>Price: {product.price}</p>
                        <p style={{fontFamily: "Roboto"}}>Rating: {product.rating.rate}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList;