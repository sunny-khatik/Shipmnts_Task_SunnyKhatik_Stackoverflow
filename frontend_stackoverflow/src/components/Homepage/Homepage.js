import React from 'react';
import "./Homepage.css"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';
const Homepage = () => {
    let history = useHistory();
    var uname = localStorage.getItem("username")
    const [que, setque] = useState()
    useEffect(() => {
        axios.get("http://localhost:8080/questions/all").then((res) => { setque(res.data.questions) })
            .catch((err) => console.log("" + err))
    }, [])
    const handle = (qid) => {
        localStorage.setItem("qid", qid)
        history.push("/answeraQuetions")
        window.location.reload()
    }
    console.log(que)
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
            {
                que === undefined ? (
                    <p>No questions Posted.</p>

                ) :
                    (
                        que.map(item => (
                            <div className="queList__div">
                                <p>Question Asked by : {item.username}</p>
                                <p>Question Title: {item.title}</p>
                                <p>Body : {item.body}</p>
                                <p>Accepted : <AccessTimeIcon />  </p>
                                <button onClick={() => { handle(item.question_id) }}> Answers a question</button>
                                <hr />
                            </div>
                        )
                        )
                    )
            }
        </div >
    );
};

export default Homepage;