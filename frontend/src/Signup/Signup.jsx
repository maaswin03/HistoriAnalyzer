import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import './Signup.css'

function Signup() {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [country, setCountry] = useState('')
  const [dob, setdob] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phone, setphone] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, email, phone, country, dob, password })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='signup1'>
        <div className='signup2'>
          <div className='signup3'>
            <h2>Ai Account</h2>
          </div>
          <div className='signup3 signup4'>
            <p><a href="/signin">Sign in</a></p>
            <p><a href="/signup">Create Your Account</a></p>
            <p><a href=''>FAQ</a></p>
          </div>
        </div>
      </div>


      <div className='signup5'>
        <form onSubmit={handleSignup}>
          <div className='signup6'>
            <div className='signup7'>

              <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Create Your Ai Account</h1>
              <p style={{ textAlign: 'center' }}>One Ai Account is all you need to access all Ai services.</p>

              <div className='signup8'>
                <input type="text" placeholder='First name' value={firstname} onChange={(e) => setfirstname(e.target.value)} required />
                <input type="text" placeholder='Last name' required style={{ marginLeft: '3%' }} value={lastname} onChange={(e) => setlastname(e.target.value)} />
              </div>
              <div className='signup9'>
                <p style={{ textAlign: 'left', marginBottom: '0', fontWeight: '500' }}>COUNTRY/REGION</p>
                <input type="text" placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)} /><br></br>
                <input type="date" placeholder='Date Of Birth' required value={dob} onChange={(e) => setdob(e.target.value)} />
              </div>
            </div>
          </div>

          <div className='signup14'>
            <div className='signup6 signup10' style={{ border: 'none' }}>
              <div className='signup7 signup11'>
                <input type="email" placeholder='name@example.com' required value={email} onChange={(e) => setemail(e.target.value)} /><br></br>
                <p style={{ fontSize: '12px' }}>This will be your new Ai ID.</p>
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setpassword(e.target.value)} /><br></br>
                <input type="password" placeholder='Confirm password' required /><br></br>
                <input type="text" placeholder='Phone number' required value={phone} onChange={(e) => setphone(e.target.value)} />
              </div>
            </div>
          </div>

          <div className='signup12' style={{marginBottom:'7%'}}>
            <div className='signup13'>
              <div style={{display:'flex',justifyContent:'center',marginTop:'0'}}>
                <input type='checkbox' required></input>
                <p style={{marginLeft:"1%" , fontSize:'15px'}}>Accept Terms & Condition</p>
              </div>
              <p style={{marginTop:'0'}}>Your Ai ID information is used to allow you to sign in securely and access your data. historianalyzer records certain data for security, support and reporting purposes. If you agree, historianalyzer may also use your Ai ID information to send you marketing emails and communications, including based on your use of Ai services. <a href='' style={{ textDecoration: 'none', color: '#3AAFA9' }}>See how your data is managed.</a></p>
              <button type='submit'>Continue</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup