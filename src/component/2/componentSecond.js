import React from 'react';
import "./componentSecond.module.css"

function ComponentSecond(props) {
    const user = {
        name: "Anna",
        age: 19
    }

    return (
        <ul className={"classes.Title"}>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
    );
}


export default ComponentSecond;