import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios';
import './Chatbot.css'

function Chatbot() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [cleanedResponse, setCleanedResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5100/generate", { prompt: text });
      setResponse(res.data.text);

      const cleanedRes = res.data.text.split('\n').map(paragraph => paragraph.replace(/\*/g, '')).join('\n');
      setCleanedResponse(cleanedRes);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <Navbar />

      <div className='chatbot1'>
        <div className='chatbot2'>
          <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
              rows="4"
              cols="50"
            />
            <br />
            <button type="submit" style={{ width: '' }}>Submit</button>
          </form>
        </div>
        <div className='chatbot3'>
          {cleanedResponse && (
            <p>
              {cleanedResponse}
            </p>
          )}
        </div>
      </div>

      <div className='chatbot4'>
        <h2>HistoriXpert - Your AI-Powered Historical Research Assistant</h2>
        <p>Welcome to HistoriXpert, where the past comes alive through the power of artificial intelligence. Whether you're a seasoned historian, a curious student, or an avid history buff, HistoriXpert is your gateway to a world of historical exploration. Our platform combines cutting-edge AI technology with a vast database of historical information, offering you a comprehensive and insightful research experience.</p>
        <p>Uncover the stories of ancient civilizations, explore the events that shaped nations, and delve into the lives of historical figures. With HistoriXpert, you can access detailed information, timelines, and analyses, making your research journey both informative and engaging. Our AI assistant is here to help you navigate through the complexities of history, providing you with accurate and relevant information at every step.</p>
      <p>Join us on a journey through time and unravel the mysteries of the past with HistoriXpert. Start exploring today and embark on a historical adventure like never before.</p>
      </div>

      <Footer/>
    </div>
  )
}

export default Chatbot
