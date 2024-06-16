import React, { useState } from 'react';
import './Pricing.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const Pricing = () => {
    const handleamount = (e) => {
        e.preventDefault()
        handleSubmit(499)
      }
    
      const handleamount1 = (e) => {
        e.preventDefault()
        handleSubmit(999)
      }

    const handleSubmit = (amount) => {
        if (amount === "") {
            alert("Please enter amount");
        } else {
            var options = {
                key: "rzp_test_sz6vXhYYcZATwz",
                key_secret: "Z4OjloVh5GUOpbya26cCKMt7",
                amount: amount * 100,
                currency: "INR",
                name: "HistoriXpert",
                description: "for testing purpose",
                prefill: {
                    name: "ASWIN M A",
                    email: "aswin@gmail.com",
                    contact: "9597496287"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };


            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    return (
        <div>
            <Navbar />

            <div className='pricing1'>
                <h1>Pricing</h1>
            </div>


            <div className='pricing2'>
                <div className='pricing3'>
                    <h2>Free</h2>
                    <p>For individuals just getting started with HistoriXpert</p>
                    <ol>
                        <li>Assistance with writing, problem solving and more</li>
                        <li>Access to Xpert-3.5</li>
                        <li>Limited access to Xpert-4o</li>
                        <li>Limited access to data analysis, file uploads, vision, web browsing, and custom Xperts</li>
                    </ol>
                    <h2>IN₹0 <span style={{ fontSize: '15px', fontWeight: '300' }}> / month</span></h2>
                    <button style={{ marginTop: '35%' }}>Start now</button>
                </div>
                <div className='pricing3'>
                    <h2>Plus</h2>
                    <p>For individuals looking to amplify their productivity</p>
                    <ol>
                        <li>Early access to new features</li>
                        <li>Access to Xpert-4, Xpert-4o, Xpert-3.5</li>
                        <li>Up to 5x more messages for Xpert-4o</li>
                        <li>Access to data analysis, file uploads, vision, and web browsing</li>
                        <li>DALL•E image generation</li>
                        <li>Create and use custom Xperts</li>
                    </ol>
                    <h2>IN₹499 <span style={{ fontSize: '15px', fontWeight: '300' }}> / month</span></h2>
                    <button style={{ marginTop: '20%' }} onClick={handleamount}>Start now</button>
                </div>
                <div className='pricing3'>
                    <h2>Team</h2>
                    <p>For fast-moving teams looking to supercharge collaboration</p>
                    <ol>
                        <li>Everything included in Plus</li>
                        <li>Higher message limits on Xpert-4, Xpert-4o, and tools like DALL · E, Browsing, data analysis, and more</li>
                        <li>Create and share Xperts with your workspace</li>
                        <li>Admin console for workspace management</li>
                        <li>Team data excluded from training by default. Learn more</li>
                    </ol>
                    <h2>IN₹999 <span style={{ fontSize: '15px', fontWeight: '300' }}> per user / month billed annually</span></h2>
                    <h2>IN₹1499 <span style={{ fontSize: '15px', fontWeight: '300' }}> per user / month billed monthly</span></h2>
                    <button style={{ marginTop: '5%' }} onClick={handleamount1}>Start now</button>
                </div>
                <div className='pricing3'>
                    <h2>Enterprise</h2>
                    <p>For innovative companies looking to scale securely</p>
                    <ol>
                        <li>Everything included in Team</li>
                        <li>Unlimited, high speed access to Xpert-4,  Xpert-4o, and tools like DALL · E, Browsing, data analysis, and more</li>
                        <li>Expanded context window for longer inputs</li>
                        <li>Enterprise data excluded from training by default & custom data retention windows. Learn more</li>
                        <li>Admin controls, domain verification, and analytics</li>
                        <li>Priority support & ongoing account management</li>
                    </ol>
                    <button >Contact Sales</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Pricing;
