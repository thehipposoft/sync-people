'use client'
import React, { useState } from 'react';
import apiFetch from '@wordpress/api-fetch';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        phone: '',
        email: '',
        date_of_birth: '',
        gender: '',
        address: '',
        state: '',
        cp: '',
        languages: [],
      });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    apiFetch({
      path: 'https://admin.insyncx.com/wp-json/wp/v2/talent/',
      method: 'POST',
      data: JSON.stringify(formData),
  },)
      .then((response:any) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        // You can handle the response from the server here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="last_name" className="block">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="date_of_birth" className="block">DOB:</label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth || ''}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <p className="mb-2">Gender:</p>
          <div className='flex'>
                <div>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    />
                    Male
                    </label>
                </div>
                <div>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    />
                    Female
                    </label>
                </div>
                <div>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === 'Other'}
                        onChange={handleChange}
                    />
                    Other
                    </label>
                </div>
            </div>
        </div>


        <div>
          <label htmlFor="address" className="block">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="state" className="block">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Victoria">Victoria</option>
            <option value="New South Wales">New South Wales</option>
            <option value="Queensland">Queensland</option>
            <option value="South Australia">South Australia</option>
            <option value="Western Australia">Western Australia</option>
            <option value="Northern Territory">Northern Territory</option>
          </select>
        </div>

        <div>
          <label className="block">Languages:</label>
          <select
            multiple
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
