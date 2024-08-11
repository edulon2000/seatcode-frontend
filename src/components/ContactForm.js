import { useState } from 'react';
import api from '../utils/api';
import InputMask from 'react-input-mask';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data before submission:', formData);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number format
    const phonePattern = /^\d{11}$/; // Adjusted for 11 digits
    if (!phonePattern.test(formData.phone.replace(/\D/g, ''))) { // Remove non-digit characters
      alert("Please enter a valid phone number (11 digits).");
      return;
    }

    try {
      console.log('Sending request to backend...');
      const response = await api.post('/contacts', formData);
      console.log('Contact saved:', response.data);
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-left mb-2">Phone</label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
              required
              maskChar={null} // Avoid showing mask characters in input
              title="Enter a valid phone number (11 digits)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
