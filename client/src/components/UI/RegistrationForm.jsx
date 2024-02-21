import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaKey, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Define validateEmail function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Define validatePassword function
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}/;
  return passwordRegex.test(password);
};

// BasicRegistrationForm component
const BasicRegistrationForm = ({ formData, errors, handleChange, handleSubmit }) => (
  <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <h1 className="text-4xl font-bold mb-6 text-center">Seller Registration</h1>
    <div className="flex flex-col mt-1">
      <label className="text-lg">Username</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaUser className="text-gray-400" />
        </span>
        <input
          className={`appearance-none border indent-4 ${
            errors.username ? 'border-red-500' : 'border-gray-200'
          } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
    </div>
    <div className="flex flex-col mt-2">
      <label className="text-lg">Email</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaEnvelope className="text-gray-400" />
        </span>
        <input
          className={`appearance-none border indent-4 ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
    </div>
    <div className="flex flex-col mt-2">
      <label className="text-lg">Password</label>
      <div className="relative mt-1">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaKey className="text-gray-400" />
        </span>
        <input
          className={`appearance-none border indent-4 ${
            errors.password ? 'border-red-500' : 'border-gray-200'
          } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {errors.password && (
        <p className="text-red-500 text-xs italic">{errors.password}</p>
      )}
    </div>
    <div className="input-group mt-5">
      <button
        className="bg-black w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Next
      </button>
    </div>
  </form>
);

// AdditionalDetailsForm component
const AdditionalDetailsForm = ({ formData, errors, handleChange, handleSubmit }) => (
  <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <h1 className="text-4xl font-bold mb-6 text-center">Additional Details</h1>
    <div className="flex flex-col mt-2">
      <label className="text-lg">Aadhar</label>
      <input
        className={`appearance-none border indent-4 ${
          errors.aadhar ? 'border-red-500' : 'border-gray-200'
        } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
        id="aadhar"
        name="aadhar"
        type="text"
        placeholder="Aadhar"
        value={formData.aadhar}
        onChange={handleChange}
      />
      {errors.aadhar && (
        <p className="text-red-500 text-xs italic">{errors.aadhar}</p>
      )}
    </div>
    <div className="flex flex-col mt-2">
      <label className="text-lg">Address</label>
      <input
        className={`appearance-none border indent-4 ${
          errors.address ? 'border-red-500' : 'border-gray-200'
        } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
        id="address"
        name="address"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && (
        <p className="text-red-500 text-xs italic">{errors.address}</p>
      )}
    </div>
    <div className="flex flex-col mt-2">
      <label className="text-lg">Phone Number</label>
      <input
        className={`appearance-none border indent-4 ${
          errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
        } rounded w-80 h-12 py-2 px-3 pl-8 leading-tight focus:outline-none focus:shadow-outline`}
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>
      )}
    </div>
    <div className="input-group mt-5">
      <button
        className="bg-black w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Register
      </button>
    </div>
  </form>
);

// Main RegistrationForm component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    aadhar: '',
    address: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    aadhar: '',
    address: '',
    phoneNumber: '',
  });

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Basic registration form validation
    if (step === 1) {
      if (!formData.username.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
        valid = false;
      }
      if (!formData.email.trim() || !validateEmail(formData.email)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Valid email is required' }));
        valid = false;
      }
      if (!formData.password.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: 'Password is required',
        }));
        valid = false;
      }
    }

    // Additional details form validation
    if (step === 2) {
      if (!formData.aadhar.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, aadhar: 'Aadhar is required' }));
        valid = false;
      }
      if (!formData.address.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, address: 'Address is required' }));
        valid = false;
      }
      if (!formData.phoneNumber.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Phone Number is required' }));
        valid = false;
      }
    }

    if (valid) {
      // Move to the next step or submit the form
      if (step === 1) {
        setStep(2);
      } else {
        navigate('/seller');
        console.log('Form submitted:', formData);
      }
    }
  };

  return (
    <div className="min-h-screen w-96 m-auto flex flex-col items-center justify-center">
      {/* Conditionally render the appropriate form based on the current step */}
      {step === 1 ? (
        <BasicRegistrationForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <AdditionalDetailsForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <div className="text-lg">
        Already have an account? <a href="/seller/login">Login</a>
      </div>
      <div className="input-group2">
        <div className="divider flex w-80 ml-10 mt-10">
          <hr className="inline-block w-1/3 align-self-center mt-3" />
          <p className="mx-5">or</p>
          <hr className="inline-block w-1/3 align-self-center mt-3" />
        </div>
        <div className="brands flex justify-center mt-5">
          <FaGoogle className="text-3xl cursor-pointer mr-6" />
          <FaTwitter className="text-3xl cursor-pointer mr-6" />
          <FaInstagram className="text-3xl cursor-pointer mr-6" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
