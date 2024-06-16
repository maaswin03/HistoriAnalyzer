import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import './Home.css'
import image1 from '../Image/image1.webp';
import image2 from '../Image/image3.webp';
import video1 from '../Image/video1.mp4';
import video2 from '../Image/video2.mp4';
import video3 from '../Image/video3.mp4';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <div>
            <Navbar />


            <div className='home1'>
                <div className='home2'>
                    <div className='home3'>
                        <h1>Get answers. Find inspiration. Be more productive.</h1>
                        <p>HistoriXpert provides AI-powered analysis of historical documents, delivering deep insights and accurate interpretations. Uncover the past effortlessly.</p>
                        <button>Start now</button>
                    </div>
                </div>
            </div>

            <div className='home4'>
                <h1>Advanced capabilities in HistoriXpert</h1>
            </div>


            <div className='home5'>
                <div className='home6'>
                    <h3>Type, talk, and use it your way</h3>
                    <p>With HistoriXpert, you can type or start a voice conversation by tapping the headphone icon in the mobile app. </p>
                </div>
                <div className='home7'>
                    <img src={image2} width='100%' height='100%' />
                </div>
            </div>

            <div className='home5'>
                <div className='home6'>
                    <h3>Browse the web</h3>
                    <p>HistoriXpert can answer your questions using its vast knowledge and with information from the web.</p>
                </div>
                <div className='home7'>
                    <video width="100%" height="100%" muted loop autoPlay>
                        <source src={video2} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className='home5'>
                <div className='home6'>
                    <h3>Analyze data and create charts</h3>
                    <p>Upload a file and ask HistoriXpert to help analyze data, summarize information or create a chart. </p>
                </div>
                <div className='home7'>
                    <video width="100%" height="100%" muted loop autoPlay>
                        <source src={video1} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className='home5'>
                <div className='home6'>
                    <h3>Talk about an image</h3>
                    <p>Take or upload an image and ask HistoriXperts about it.</p>
                </div>
                <div className='home7'>
                    <img src={image1} width='100%' height='100%' />
                </div>
            </div>

            <div className='home5'>
                <div className='home6'>
                    <h3>Customize HistoriXpert for work, daily tasks or inspiration with Xperts</h3>
                    <p>​​Explore the Xpert store and see what others have made. Xpert Plus users can also create their own custom Xperts. </p>
                </div>
                <div className='home7'>
                    <img src={image2} width='100%' height='100%' />
                </div>
            </div>

            <div className='home5'>
                <div className='home6'>
                    <h3>Create images</h3>
                    <p>Xpert Plus users can ask ChatGPT to create images using a simple sentence or even a detailed paragraph.</p>
                </div>
                <div className='home7'>
                    <img src={image1} width='100%' height='100%' />
                </div>
            </div>


            <div className='home4'>
                <h1>Get started with ChatGPT today</h1>
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
                    <button style={{ marginTop: '35%' }}><Link to="/chatbot">Start now</Link></button>
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
                    <button style={{ marginTop: '20%' }}><Link to='/pricing'>Start now</Link></button>
                </div>
            </div>


            <div className='home5'>
                <div className='home6' style={{textAlign:'center'}}>
                    <h3>Join hundreds of millions of users and try ChatGPT today.</h3>
                    <button>Join HistoriXpert</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home