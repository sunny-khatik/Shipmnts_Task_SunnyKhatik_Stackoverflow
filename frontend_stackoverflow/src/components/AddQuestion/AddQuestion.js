import React from 'react';
import { useLocation } from 'react-router';
import "./AddQuestion.css"
import { useState } from 'react';
import { useHistory } from "react-router-dom"
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
import { Link } from "react-router-dom";
const AddQuestion = () => {
    let history = useHistory();
    const [tag, settag] = useState();
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");

    const handleclick = async (e) => {
        e.preventDefault();
        try {
            const senddata = {
                user_id: localStorage.getItem("userid"),
                title: title,
                body: body,
                tags: tag
            }
            await axios.post("http://localhost:8080/questions/create", senddata)
                .then(res => {
                    console.log(res)
                })
        } catch (error) {
            console.log("" + error)
        }
        history.push("/homepage")
        window.location.reload();
    }
    const splitags = (tags) => {
        var sep_string = tags.split(",")
        console.log(sep_string)
        settag(sep_string)
        console.log(sep_string)
    }
    console.log(title)
    return (
        <div className="outer__div">
            <h2>Add New Question</h2>
            <span>Title :</span> <TextField type="text" name="title" onChange={(e) => { settitle(e.target.value) }} required /><hr />
            <span>Body :</span> <TextField type="text" name="title" onChange={(e) => { setbody(e.target.value) }} required /><hr />
            <span>Tags : </span> <TextField type="text" name="title" onChange={(e) => { splitags(e.target.value) }} required /><hr />
            <button onClick={handleclick}>Add Question</button>
            <hr />
            <Link to="/homepage">
                <button>HomePage</button>
            </Link>
        </div>
    );
};

export default AddQuestion;