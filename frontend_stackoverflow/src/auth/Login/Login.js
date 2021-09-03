import React, { useState } from 'react';
import axios from "axios"
import Validator from 'validator';
import { Link } from "react-router-dom"
const Login = () => {
    const [color, setColor] = useState(false)
    // const [isUsernameTaken, setisUsernameTaken] = useState("")
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [flip, setFlip] = useState(false)
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
    const handelClick = async (e) => {
        console.log("clciked")
        e.preventDefault();
        try {
            const data = {
                uname: username,
            }
            await axios.post("/user/login", data)
            console.log(data)
            setFlip(true)
        } catch (error) {
            console.log("" + error)
        }
    }
    return (
        <div >
            <form onSubmit={handelClick}>
                <h3>Login Form</h3>
                <p>UserName</p>
                <input type="text" name="uname" placeholder="Enter username" onChange={(e) => validateUsername(e.target.value)} required />
                <hr />
                {console.log(flip)}

                <Link to={flip ? "/homepage" : "/"}>
                    <button type="submit" style={{
                        width: "150px",
                        backgroundColor: "#E0A97B",
                        color: "white"

                    }} >Login</button>
                </Link>
                <hr />
            </form>
        </div >
    );
};

export default Login;