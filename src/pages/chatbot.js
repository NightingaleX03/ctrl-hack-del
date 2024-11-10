// src/components/About.js
import React, { useState } from 'react';
import ChatBot from '../components/chatbot';
import ReturnFormData from '../components/returnFormData';

const About = () => {
  const [loadedData, setLoadedData] = useState([]); // Shared state for form results

  // Function to update loadedData, passed down to ChatBot
  const handleDataUpdate = (data) => {
    setLoadedData(data);
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <p>Welcome to our chatbot app!</p>
      {/* Pass handleDataUpdate to ChatBot */}
      <ChatBot onDataUpdate={handleDataUpdate} />
      {/* Pass loadedData as data prop to ReturnFormData */}
      <ReturnFormData data={loadedData} />
    </div>
  );
};

export default About;
