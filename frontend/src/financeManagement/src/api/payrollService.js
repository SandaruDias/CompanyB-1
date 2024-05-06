import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/payroll'; // Base URL for payroll API

// Create payroll entry
export const createPayroll = (payrollData) => {
  return axios.post(`${BASE_URL}`, payrollData);
};

// Fetch all payroll entries
export const fetchPayrolls = () => {
  return axios.get(`${BASE_URL}`);
};

// Fetch payroll entry by ID
export const fetchPayrollById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Update payroll entry
export const updatePayroll = (id, payrollData) => {
  return axios.put(`${BASE_URL}/${id}`, payrollData);
};

// Delete payroll entry
export const deletePayroll = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

// Optional: Fetch payroll for a specific employee
export const fetchPayrollsForEmployee = (employeeId) => {
  return axios.get(`${BASE_URL}/employee/${employeeId}`);
};
