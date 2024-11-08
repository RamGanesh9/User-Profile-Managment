// src/components/ProfileForm.js
import React from 'react';
import './ProfileForm.css';

function ProfileForm({ formType, onClose }) {
  const renderFormFields = () => {
    switch (formType) {
      case 'personalDetails':
        return (
          <div className="form-content">
            <h2>PERSONAL DETAILS</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Username" />
              <button className="accent-button">SAVE ALL DETAILS</button>
            </form>
          </div>
        );

      case 'billingAddress':
        return (
          <div className="form-content">
            <h2>BILLING ADDRESS</h2>
            <form>
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="ZIP Code" />
              <input type="text" placeholder="Country" />
              <button className="accent-button">SAVE ALL DETAILS</button>
            </form>
          </div>
        );

      case 'paymentMethods':
        return (
          <div className="form-content">
            <h2>PAYMENT METHODS</h2>
            <form>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="CVV" />
              <input type="text" placeholder="Expiration Date (MM/YY)" />
              <input type="text" placeholder="Cardholder Name" />
              <button className="accent-button">SAVE PAYMENT METHOD</button>
            </form>
          </div>
        );

      case 'changePassword':
        return (
          <div className="form-content">
            <h2>CHANGE PASSWORD</h2>
            <form>
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
              <button className="accent-button">UPDATE PASSWORD</button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-form">
      <button className="close-button" onClick={onClose}>X</button>
      {renderFormFields()}
    </div>
  );
}

export default ProfileForm;
