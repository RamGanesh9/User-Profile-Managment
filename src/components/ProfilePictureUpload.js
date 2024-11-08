// src/components/ProfilePictureUpload.js
import React, { useState } from 'react';
import './ProfilePictureUpload.css';

function ProfilePictureUpload() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-picture-upload">
      <div className="preview-container">
        {preview ? (
          <img src={preview} alt="Profile Preview" />
        ) : (
          <div className="placeholder">Upload Profile Image</div>
        )}
      </div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
}

export default ProfilePictureUpload;
