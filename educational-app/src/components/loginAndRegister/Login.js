import axios from "axios"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
    //States
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/login", {
            password:password,
            email: email,
        })
        .then(response => {
           if(response.data.length==0)
           {
                console.log("test")
                
           }
           else{
                console.log("test2")
           }
        });};
    return (
        <div>
            <h1>Login</h1>
            <form className='add-form' onSubmit={loginUser}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' placeholder = 'Add Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='text' placeholder = 'Add Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type = 'submit' value =  'Save Task' className='btn btn-block'></input>
            </form>
            <div>
                <p>
                    Don't have an account already? 
                    <a href="#">Register here</a>
                </p>
            </div>
            <a href="#"></a>
        </div>
    )
}

export default Login
