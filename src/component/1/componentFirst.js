import React from 'react';
import App from "../../App";
import styles from "./componentFirst.module.css"

function ComponentFirst(props) {
    const user = {
        name: "Anna",
        age: 19
    }
    console.log(styles)

    return (
        <ul className={classes.Title}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <styles/>
            <App/>
        </ul>
    );
}

export default ComponentFirst;