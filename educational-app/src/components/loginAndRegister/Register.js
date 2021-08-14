import axios from "axios"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
    //States
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const registerUser = (event) =>{
        axios.post("http://localhost:3001/register", {
            username: name,
            password:password,
            email: email,
        })
        .then(response => {
            if(response.data)
            {
                history.push("/login")
            }
            else{
                history.push("/registration-failed")
            }
        });};

    return (
        <div>
            <h1>Register</h1>
            <form className='add-form' onSubmit={registerUser}>
                <div className='form-control'>
                <label>Name</label>
                    <input type='text' placeholder = 'Add Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' placeholder = 'Add Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder = 'Add Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type = 'submit' value =  'Register' className='btn btn-block'></input>
            </form>
            <div>
                <p>
                    Have an account already? 
                    <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    )
}

export default Login