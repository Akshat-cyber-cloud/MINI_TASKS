import React from "react";
import "./ShowList.css";

const ShowList = ({shows}) => {
    return (
        <>
            <div className="show-list">
                {shows.map((show) => (
                    <div key={show.id} className="show-card">
                        <img src={show.image?.medium} alt={show.name} />
                        <div className="show-card-content">
                            <h2>{show.name}</h2>
                            <p className="genres">{show.genres?.join(" • ")}</p>
                            <p className="rating"> {show.rating?.average || "N/A"} / 10</p>
                            <span className="status-badge">{show.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShowList;