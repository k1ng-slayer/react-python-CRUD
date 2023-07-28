import axios from "axios";
import React, { useState } from "react";

function Delete() {
    const [del, setDel] = useState("");

    const handleClick = () => {
        axios
            .delete(`http://localhost:3000/delete`, { transfer: del })
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
                    onChange={(event) => {
                        console.log("typing...");
                        setDel(event.target.value);
                    }}
                />
            </p>
            <button type="button" onClick={handleClick}>
                Delete Transfer
            </button>
        </>
    );
}

export default Delete;
