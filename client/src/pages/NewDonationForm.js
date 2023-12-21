import React, { useState } from "react";
import { useRouter } from 'next/router';  // Import useRouter from Next.js

function NewDonationForm({ organizationId, donorId }) {
  const [formData, setFormData] = useState({
    amount: '',
    donor_id: donorId,
    organization_id: organizationId
  });
  const router = useRouter();  // Create an instance of useRouter

  const handleAddDonation = async (donationData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000//new/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donationData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Redirect to the dashboard after successful donation
      router.push('/dashboard');  // Replace '/dashboard' with your dashboard route
    } catch (error) {
      console.error('Donation failed:', error);
      // Handle the error (e.g., show an error message)
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