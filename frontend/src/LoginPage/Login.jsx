import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Cookies from 'js-cookie';
import './Login.css'
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.text();

            if (data === 'yes') {
                Cookies.set('loggedInUser', 'agirsenseisthebest', { expires: 7 });
                onLogin();
                console.log('Login Success');
            } else {
                setError('Invalid Email or Password');
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='signin1'>
                <div className='signin2'>
                    <h2>Sign in to Your Account</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder='Email or Phone Number' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                        {error && <p style={{ marginBottom: '1%', marginTop: '1%', color: 'red' }}>{error}</p>}
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
