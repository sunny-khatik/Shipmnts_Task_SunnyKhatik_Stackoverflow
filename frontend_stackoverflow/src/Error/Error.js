import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import { Link } from "react-router-dom"
import "./Error.css"
const Error = () => {
    return (
        <div style={{ backgroundColor: "#ececec", paddingTop: "100px" }}>
            <div className="booked_div">

                <SentimentVeryDissatisfiedIcon
                    style={{
                        width: "60px",
                        height: "60px",
                        //     color: "green",
                        //     marginLeft: "42%"
                    }}
                />
                <p style={{ textAlign: "center", color: "red", fontWeight: "700" }}>You Encountred a error:404 Page not Found</p>
                <Link to="/">HomePage</Link>
                <p style={{ textAlign: "center", fontWeight: "500" }}>Go to The Homepage.</p>
            </div>

        </div>
    );
};


export default Error;