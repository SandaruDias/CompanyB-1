// CustomerLoginPage.js

import "./AdminLoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerLoginPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	// Define state for the server response
	const [response, setResponse] = useState(null);

	// Handler function for form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handler function for form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Make an HTTP request using fetch
			const response = await fetch(
				`http://localhost:8090/api/user/login?username=${formData.username}&password=${formData.password}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			// Parse the JSON response
			const data = await response.text();
			// Check the server response
			if (data === "Login successful!") {
				// TODO what link to navigate after login is successful
				navigate("/customer-order");
			}

			// Update the state with the server response
			setResponse(data);
		} catch (error) {
			console.error("Error:", error);
			// Handle any errors here (optional)
		}
	};

	const handleSignUpClick = () => {
		navigate('/customer-register') // Show an alert when sign up button is clicked
	};

	return (
		<div className="login-container">
			<h2>Customer Login</h2>
			<form onSubmit={handleSubmit} className="form-container">
				<div>
					<label>Username:</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>

			{/* Display the response from the server */}
			{response && (
				<div>
					<h2>Server Response:</h2>
					<p>{response}</p>
				</div>
			)}
			<p onClick={handleSignUpClick} className="signup-msg">
				Need to sign up? Click here.
			</p>
		</div>
	);
};

export default CustomerLoginPage;