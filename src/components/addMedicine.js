
// src/components/addMedicine.js
import React, { useState } from 'react';
import './addMedicine.css';

const AddMedicine = () => {
    const [medicine, setMedicine] = useState('');
    // const [frequency, setFrequency] = useState('');
    // const [dosage, setDosage] = useState('');
    
    return (
        <form className="create">
            <h3>Add a New Medicine</h3>

            <label>Medication Name</label>
            <input 
                type="text"
                onChange={(e) => setMedicine(e.target.value)}
                value={medicine}
            />





        </form>
    )

}

export default AddMedicine;