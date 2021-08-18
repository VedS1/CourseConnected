import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios'
const Verification = () => {
    
    let location = useLocation();

    const [verificationCode, setVerificationCode] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        var secondsElapsed = Math.floor(Date.now()/1000) - parseInt((location.state.user.verCode).substr(5,), 36);
        if(secondsElapsed<(60*5))
        {
            console.log(location.state.user)
            axios.post("http://localhost:3001/signup", {
                user:location.state.user,
            })
        }
        else{
            console.log("Sorry, you took too long. ")
        }

    }
    
    return (
        <div>
            <div>
                <h1>Account Verification</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Enter your code here: </label>
                    <input className="password-enterRegister" type='password' placeholder = 'Add verification code' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}/>
                </div>
                <input className="Verify" type = 'submit' value =  'Verify'></input>
            </form>
        </div>
    )
}

export default Verification
