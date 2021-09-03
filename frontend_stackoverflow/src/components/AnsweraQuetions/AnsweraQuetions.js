import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./AnsweraQuetions.css"
const AnsweraQuetions = () => {
    const [que, setque] = useState()
    useEffect(() => {
        axios.get("http://localhost:8080/questions/question/" + qid)
            .then((res) => setque(res.data.question))
            .catch((err) => console.log("" + err))
    }, [])
    var qid = localStorage.getItem("qid")
    // console.log(que.body)
    return (
        <div>
            {
                que === undefined ? (
                    <p>Questios data is not available</p>
                ) : (
                    <div>
                        <h3>Title :{que.title} </h3>
                        <h4>Body : {que.body}</h4>
                        <h5>Tags : {
                            que.tags.map(e => (
                                <span>{e} ,</span>
                            ))
                        }</h5>
                        <span>Answer a question: </span><input type="test" name="answer" required></input>
                        <hr /><button>submit Answer</button>
                    </div>
                )
            }
        </div>
    );
};

export default AnsweraQuetions;