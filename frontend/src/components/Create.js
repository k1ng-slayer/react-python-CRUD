import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [input, setInput] = useState({ id: "", name: "" });

    const handleChange = (event) => {
        console.log("handleChange", event);
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        axios
            .post("http://127.0.0.1:5000/create", { transfer: input })
            .then((response) => {
                console.log("Transfer created:", input, response);
                setInput({ id: "", name: "" });
            })
            .catch((error) => {
                console.error("Error creating transfer:", error);
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
                        placeholder="Enter Name"
                        onChange={handleChange}
                    />
                </p>
                <button type="submit">Add Transfer</button>
            </form>
        </>
    );
}

export default Create;
