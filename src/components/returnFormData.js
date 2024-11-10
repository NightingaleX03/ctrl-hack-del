// src/components/ReturnFormData.js
import React from 'react';

const ReturnFormData = ({ data }) => {
  if (data.length === 0) {
    return <p>No matching results found.</p>;
  }

  return (
    <div className="results-container">
      <h3>Matching Results</h3>
      <ul>
        {data.map((row, index) => (
          <li key={index}>
            <strong>Disease:</strong> {row.disease} <br />
            <strong>Fever:</strong> {row.fever} <br />
            <strong>Cough:</strong> {row.cough} <br />
            <strong>Fatigue:</strong> {row.fatigue} <br />
            <strong>Difficulty Breathing:</strong> {row.difficultyBreathing} <br />
            <strong>Age:</strong> {row.age} <br />
            <strong>Gender:</strong> {row.gender} <br />
            <strong>Blood Pressure:</strong> {row.bloodPressure} <br />
            <strong>Cholesterol Level:</strong> {row.cholesterolLevel} <br />
            <strong>Outcome:</strong> {row.outcome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReturnFormData;
