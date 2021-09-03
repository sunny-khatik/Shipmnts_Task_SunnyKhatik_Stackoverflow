import axios from 'axios';
import React, { useState } from 'react';
import Validator from "validator"
const Register = () => {
    const [color, setColor] = useState(false)
    // const [isUsernameTaken, setisUsernameTaken] = useState("")
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const validateUsername = (uname) => {
        if (Validator.isEmail(uname)) { //start of see a username is valid or not.
            setUsername(uname)
            setColor(true)
            setUsernameError('Valid Username :)')
        }
        else {
            setUsernameError("Username is taken :(")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sendData = {
                uname: username,
            }
            // console.log(username)
            // console.log(mail)
            // console.log(password)
            await axios.post("/user/register", sendData)
        } catch (error) {
            console.log("" + error)
        }
    }
    const handleRegisterMessage = () => {
        console.log("register clicked")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register Form</h2>
                <p>UserName</p>
                <input type="text" name="uname" onChange={(e) => { validateUsername(e.target.value) }} placeholder="Enter username" required />
                {console.log(username)}
                <br />
                <span style={{
                    fontWeight: 'bold',
                    color: color ? ("green") : ("red"),
                }}>{usernameError}</span>
                <hr />
                <button style={{
                    width: "150px",
                    backgroundColor: "#E0A97B",
                    color: "white"

                }} type="submit" onClick={handleRegisterMessage}>Register</button>
                <hr />
            </form>

        </div>
    );
};

export default Register;