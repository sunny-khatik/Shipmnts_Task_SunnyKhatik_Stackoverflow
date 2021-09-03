import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './auth.css';
import Login from "./Login/Login"
import Register from "./Register/Register"
const Auth = () => {

  const [toggle, setToggle] = useState(false)
  const setCliclk = () => {
    setToggle(!toggle)
  }
  return (
    <div style={{ backgroundColor: "#F5F6F6", marginBottom: "10px" }}>
      <h1 style={{
        padding: "50px"
      }}>
        Stack <b>overflow</b></h1>
      <div className="auth">
        <div className="auth__div1">
          <h1>Looking for a Proper answers...?</h1>
          <h3>Come Here and Feel free to Put your Questions </h3>
        </div>
        <div className="auth__div2">
          {
            toggle === true ?
              (<Login />)
              : (<Register />)
          }

          <button onClick={setCliclk} className={toggle ? "btn" : "element"}>Want to Register ..?</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;