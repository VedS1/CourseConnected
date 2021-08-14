import axios from "axios"
import { useState, useEffect } from 'react';

const Login = () => {
    //States
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
               //route to failed page
           }
           else{
                //route to dashboard
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
        </div>
    )
}

export default Login
