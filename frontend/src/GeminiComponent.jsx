import React, { useState } from 'react';
import axios from 'axios';

const GeminiComponent = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:5000/api/gemini', { text });
            setResponse(result.data);
        } catch (error) {
            console.error('Error sending request to the server:', error);
        }
    };

    return (
        <div>
            <h1>Gemini API Interaction</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Response from Gemini API:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default GeminiComponent;
