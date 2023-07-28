import axios from "axios";
import React, { useState } from "react";

function Delete() {
    const [del, setDel] = useState("");

    const handleChange = (event) => {
        console.log("typing...");
        setDel(event.target.value);
    };

    const handleClick = () => {
        axios
            .delete("http://localhost:5000/delete", { data: { id: del } })
            .then((response) => {
                console.log("Deleted", response);
                setDel("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <p>
                <input
                    type="number"
                    value={del}
                    placeholder="Enter ID"
                    onChange={handleChange}
                />
            </p>
            <button type="button" onClick={handleClick}>
                Delete Transfer
            </button>
        </>
    );
}

export default Delete;
