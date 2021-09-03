import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
// import Validator from "validator"
const Register = () => {
    const [color, setColor] = useState(false)
    // const [isUsernameTaken, setisUsernameTaken] = useState("")
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")
    let history = useHistory();
    const validateUsername = (uname) => {

        // if (Validator.isEmail(uname)) { //start of see a username is valid or not.
        setUsername(uname)
        setColor(true)
        setUsernameError('New Valid Username : Register')
        // }
        // else {
        //     setUsernameError("Username is taken : login")
        // }
        // console.log(uname)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sendData = {
                username: username,
            }
            await axios.post("http://localhost:8080/users/login", sendData).
                then(res => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userid", res.data.user_id)
                    localStorage.setItem("username", res.data.username)
                    // console.log(userid)
                    // console.log(token)

                })
        } catch (error) {
            console.log("" + error)
            console.log(username)
        }
        history.push("/homepage")
        window.location.reload();
    }

    return (
        <div>
            <form>
                <h2>Register/Login Form</h2>
                <p>UserName</p>
                <input type="text" name="uname" onChange={(e) => { validateUsername(e.target.value) }} placeholder="Enter username" required />
                <br />
                {/* {console.log(resdata.data.message)} */}
                <span style={{
                    fontWeight: 'bold',
                    color: color ? ("green") : ("red"),
                }}>{usernameError}</span>
                <hr />
                <button style={{
                    width: "150px",
                    backgroundColor: "#E0A97B",
                    color: "white"

                }} onClick={handleSubmit} >Register</button>
                <hr />
                <p>If user has already resistred then he will be directly redireted.</p>
                <p>if user is new here so user registration will happen.</p>
            </form>

        </div>
    );
};

export default Register;