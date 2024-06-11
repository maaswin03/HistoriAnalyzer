import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import './Textapp.css'

function Textapp() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5100/generate", { prompt: text });
      setResponse(res.data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='home1'>
        <div className='home2'>
          <h1>Type your content</h1>
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
          <div className='home3'>
            {response && (
              <div className='home4'>
                {response}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textapp;
