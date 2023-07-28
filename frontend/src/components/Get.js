import React, { useEffect, useState } from "react";
import axios from "axios";

const Get = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/data")
            .then((response) => {
                console.log(response.data);
                setArray(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <ul>
                {array.map((x) => (
                    <li key={x.id}>
                        <h3>{x.name}</h3>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Get;
