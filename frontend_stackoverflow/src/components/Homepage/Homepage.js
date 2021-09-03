import React from 'react';
import "./Homepage.css"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';
import { useLocation } from "react"
const Homepage = () => {
    // const location = useLocation()
    // const resdata = props.location.state
    // console.log(resdata.message)
    var uname = localStorage.getItem("username")
    console.log(uname)
    return (
        <div className="main__div">
            <div className="head__div">
                <p>Hello : {uname}</p>
                <span
                    style={{
                        fontSize: "20px",
                        fontWeight: "500"
                    }}>Want to add a New Question.. ?</span> <Link to="addquetion"><button> Add Question</button></Link>
            </div>
            <h2>Question List</h2>
            <hr />
            <div className="queList__div">
                <p>Question Asked by : Dummy</p>
                <p>Question Title: DummyTitle</p>
                <p>Question Dummy Body</p>
                <p>Accepted : <AccessTimeIcon />    </p>
                <button> Check All answers</button>
                <hr />
            </div>
        </div>
    );
};

export default Homepage;