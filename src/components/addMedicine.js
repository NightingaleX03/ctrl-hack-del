// src/components/addMedicine.js
import React, { useState } from 'react';
import './addMedicine.css';

const AddMedicine = () => {
    const [medicine, setMedicine] = useState('');
    const [frequency, setFrequency] = useState('');
    const [dosage, setDosage] = useState('');



    
    return (
        <form className="create">
            <h3>Add a New Medicine</h3>
            <label>Medication Name</label>
            <input 
                type="text"
                onChange={(e) => setMedicine(e.target.value)}
                value={medicine}
            />
            
            <br /><br />

            <label>Frequency</label>
            <br />
            <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            >
                <option value="Weekly">Weekly</option>
                <option value="Once Daily">Once Daily</option>
                <option value="Twice Daily">Twice Daily</option>
            </select>

            <br /><br />

            <label>Dosage</label>
            <input 
                type="text"
                onChange={(e) => setDosage(e.target.value)}
                value={dosage}
            />


        </form>
    );
};

export default AddMedicine;
