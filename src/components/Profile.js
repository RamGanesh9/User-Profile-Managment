// src/components/Profile.js
import React, { useState } from 'react';
import ProfilePictureUpload from './ProfilePictureUpload';
import ProfileForm from './ProfileForm';
import './Profile.css';

function Profile() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  const handleFormToggle = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <h2>MY PROFILE</h2>
        <ProfilePictureUpload />
        <div className="profile-options">
          <button onClick={() => handleFormToggle('personalDetails')}>PERSONAL DETAILS</button>
          <button onClick={() => handleFormToggle('billingAddress')}>BILLING ADDRESS</button>
          <button onClick={() => handleFormToggle('paymentMethods')}>PAYMENT METHODS</button>
          <button onClick={() => handleFormToggle('changePassword')}>CHANGE PASSWORD</button>
        </div>
      </div>

      {showForm && (
        <div className="main-content">
          <ProfileForm formType={formType} onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}

export default Profile;
