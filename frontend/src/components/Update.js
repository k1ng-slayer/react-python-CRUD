import axios from "axios";
import React, { useState } from "react";

function Update() {
    const [input, setInput] = useState({ id: "", name: "" });

    const handleChange = (event) => {
        console.log("handleChange", event);
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        axios
            .put("http://localhost:5000/update", { transfer: input })
            .then((response) => {
                console.log("Transfer updated:", input, response);
                setInput({ id: "", name: "" });
            })
            .catch((error) => {
                console.error("Error updating transfer:", error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="number"
                        name="id"
                        value={input.id}
                        placeholder="Enter ID"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Enter New Name"
                        onChange={handleChange}
                    />
                </p>
                <button type="submit">Update Transfer</button>
            </form>
        </>
    );
}

export default Update;
