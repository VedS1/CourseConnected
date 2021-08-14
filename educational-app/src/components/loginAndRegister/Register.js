import axios from "axios"
import { useState, useEffect } from 'react';

const Login = () => {
    //States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Register</h1>
            <form className='add-form' onSubmit={console.log("hi")}>
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
                    <input type='text' placeholder = 'Add Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type = 'submit' value =  'Register' className='btn btn-block'></input>
            </form>
        </div>
    )
}

export default Login