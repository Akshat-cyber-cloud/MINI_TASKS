import React, {useState} from "react";

const AddShow = ({onAdd}) => {

    const [form , setForm] = useState({
        name: "",
        genre: "Drama",
        rating: "",
        image: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAdd(form);

        setForm({
            name: "",
            genre: "Drama",
            rating: "",
            image: ""
        });
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Show Name"
                value={form.name}
                onChange={handleChange}
            />

            <input 
                type="text"
                name="genre"
                placeholder="Genre"
                value={form.genre}
                onChange={handleChange}
            />

            <input 
                type="text"
                name="rating"
                placeholder="Rating"
                value={form.rating}
                onChange={handleChange}
            />

            <input 
                type="text"
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
            />

            <button type="submit">Add Show</button>
         </form>
        </>
    )
}

export default AddShow;