import React, { useState } from "react";
import { useRouter } from 'next/router';  // Import useRouter from Next.js

function NewDonationForm({ organizationId, donorId }) {
  const [formData, setFormData] = useState({
    amount: '',
    donor_id: '1',
    organization_id: '1'
  });
  const router = useRouter();  // Create an instance of useRouter

  const handleAddDonation = async (donationData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000//new/donation', { /* ... */ });
      if (response.ok) {
        // Emit a custom event after successful donation submission
        document.dispatchEvent(new CustomEvent('donationSubmitted'));
      }
    } catch (error) {
      // Handle errors
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddDonation({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    setFormData({ amount: '', donor_id: donorId, organization_id: organizationId });
  }

  return (
    <div className="new-donation-form">
      <h2>New Donation</h2>
      <form onSubmit={handleSubmit}>
        <input 
          value={formData.amount} 
          onChange={handleChange} 
          type="number" 
          name="amount" 
          step="0.01" 
          placeholder="Donation Amount" 
        />
        <button type="submit">Send Donation</button>
      </form>
    </div>
  );
}

export default NewDonationForm;