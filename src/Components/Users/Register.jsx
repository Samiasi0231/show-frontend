import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/ApiRequest";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiRequest.post("/api/register", formData);
      console.log("Success:", response.data);
      alert("Registration Successful!");
      navigate("/login");

    } catch (err) {
      console.log("Error response:", err.response); 
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="text-sm mt-3">
          Already have an account?{" "}
          <button className="text-blue-500 underline" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
