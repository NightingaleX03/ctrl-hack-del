// src/components/Chatbot.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ReturnFormData from './returnFormData';
import './chatbot.css';

const Chatbot = () => {
  const [formData, setFormData] = useState({
    disease: '',
    fever: 'No',
    cough: 'No',
    fatigue: 'No',
    difficultyBreathing: 'No',
    age: '',
    gender: 'Male',
    bloodPressure: 'Normal',
    cholesterolLevel: 'Normal',
    outcome: 'Negative'
  });
  const [filteredData, setFilteredData] = useState(null);
  const [csvData, setCsvData] = useState([]);

  // Load CSV data on component mount
  useEffect(() => {
    Papa.parse('/disease_data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setCsvData(result.data);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter data based on user input
    const results = csvData.filter((row) =>
      Object.keys(formData).every((key) =>
        formData[key] ? row[key].toString() === formData[key].toString() : true
      )
    );
    setFilteredData(results);
  };

  return (
    <div className="form-container">
      <h2>Patient Diagnosis Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Disease:</label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Fever:</label>
          <select name="fever" value={formData.fever} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cough:</label>
          <select name="cough" value={formData.cough} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fatigue:</label>
          <select name="fatigue" value={formData.fatigue} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Difficulty Breathing:</label>
          <select
            name="difficultyBreathing"
            value={formData.difficultyBreathing}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Blood Pressure:</label>
          <select
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
          >
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cholesterol Level:</label>
          <select
            name="cholesterolLevel"
            value={formData.cholesterolLevel}
            onChange={handleChange}
          >
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Outcome:</label>
          <select name="outcome" value={formData.outcome} onChange={handleChange}>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display results in the ReturnFormData component */}
      {filteredData && <ReturnFormData data={filteredData} />}
    </div>
  );
};

export default Chatbot;
