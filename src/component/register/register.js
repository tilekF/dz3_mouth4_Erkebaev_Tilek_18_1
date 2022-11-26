import React from 'react';

function Register(props) {
    const welcomeHello = () => {
        alert("hello world")
    }
    return (
        <>
            <button onClick={welcomeHello}>welcome!</button>
        </>
    );
}

export default Register;