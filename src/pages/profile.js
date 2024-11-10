// Profile.js
import React from 'react';
import AddMedicine from '../components/addMedicine';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <AddMedicine /> {/* Only rendering AddMedicine for testing */}
    </div>
  );
};

export default Profile;
