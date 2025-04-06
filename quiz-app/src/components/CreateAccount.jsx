import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.fullName || !formData.age || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    // Navigate to Sign-In Page
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#103778] text-white px-6 py-10">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
        Create an Account
      </h2>

      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="pam ssword"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Sign-Up Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-3 rounded-full w-full hover:bg-orange-600 transition duration-200"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
