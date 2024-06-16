import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import './Login.css'
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [condition,setCondition] = useState(false)
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://127.0.0.1:5100/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.text();

            if (data == 'true') {
                onLogin()
                console.log("Login Success")
                navigate("/chatbot");
            } else {
                setCondition(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className='signin1'>
                <div className='signin2'>
                    <h2>Sign in to Your Account</h2>
                    <form onSubmit={handlelogin}>
                        <input type="text" placeholder='Email or Phone Number' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                        {condition ? <p style={{marginBottom: '1%' , marginTop:'1%' , color:'red'}} >Invalid Email or Password</p> : <p></p>}
                        <button type="submit">Signin</button><br />
                        <div className='signin3' style={{ marginTop: '0' }}>
                            <input type='checkbox' name="Remember me" />
                            <p style={{ marginTop: '4.5%', marginLeft: '1%', fontSize: '15px' }}>Remember Me</p>
                        </div>
                    </form>
                    <p id="signin4" style={{ marginBottom: '1%' }}><a href=''>Forgetten your password &gt;</a></p>
                    <p id="signin4" style={{ fontSize: '13px', marginTop: '0' }}> Do not have an Account?  <a href="/signup"> create yours now.</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;