// Profile.js
import React from 'react';
import AddMedicine from '../components/addMedicine';
import LoadMedicine from '../components/loadMedicine';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
        <AddMedicine />
        <LoadMedicine />
    </div>
  );
};

export default Profile;
