// AdminLoginPage.js

import "./AdminLoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
	"Supplies/Stocks/Inventory Management System",
	"Manufacturing and Assembly Line Planning and Management",
	"Training (Skills Development), Prototyping, Product/Process Development and Simulation System",
	"Human Resource Management System",
	"Customer Order Management System",
	"Finance, Payroll and Risk Assessment System",
	"Quality Assurance and Quality Control System",
	"Sales and Marketing System",
	"General Management System",
];

const AdminLoginPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		role: "",
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
				`http://localhost:8090/api/employee/login?username=${formData.username}&password=${formData.password}`,
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
				// Navigate based on selected role
				switch (formData.role) {
					case "Supplies/Stocks/Inventory Management System":
						navigate("/inventory-management");
						break;
					case "Manufacturing and Assembly Line Planning and Management":
						navigate("/manufacturing");
						break;
					case "Training (Skills Development), Prototyping, Product/Process Development and Simulation System":
						navigate("/training-simulation");
						break;
					case "Human Resource Management System":
						navigate("/hr-management");
						break;
					case "Customer Order Management System":
						navigate("/customer-order");
						break;
					case "Finance, Payroll and Risk Assessment System":
						navigate("/finance-management");
						break;
					case "Quality Assurance and Quality Control System":
						navigate("/quality-assurance");
						break;
					case "Sales and Marketing System":
						navigate("/sales-management");
						break;
					case "General Management System":
						navigate("/general-management");
						break;
					default:
						console.error("Unknown role selected");
						break;
				}
			}

			// Update the state with the server response
			setResponse(data);
		} catch (error) {
			console.error("Error:", error);
			// Handle any errors here (optional)
		}
	};

	const handleSignUpClick = () => {
		alert("Contact the HR Manager"); // Show an alert when sign up button is clicked
	};

	return (
		<div className="login-container">
			<h2>Administrator Login</h2>
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
				<div>
					<label>Role:</label>
					<select
						name="role" // Specify name as role
						value={formData.role}
						onChange={handleInputChange}
					>
						<option value="">Select a role</option>
						{roles.map((role, index) => (
							<option key={index} value={role}>
								{role}
							</option>
						))}
					</select>
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

export default AdminLoginPage;