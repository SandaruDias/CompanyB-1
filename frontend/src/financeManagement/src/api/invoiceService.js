import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/invoices'; // Base URL for invoice API

// Create an invoice entry
export const createInvoice = (invoiceData) => {
  return axios.post(`${BASE_URL}`, invoiceData);
};

// Fetch all invoice entries
export const fetchInvoices = () => {
  return axios.get(`${BASE_URL}`);
};

// Fetch an invoice entry by ID
export const fetchInvoiceById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Update an invoice entry
export const updateInvoice = (id, invoiceData) => {
  return axios.put(`${BASE_URL}/${id}`, invoiceData);
};

// Delete an invoice entry
export const deleteInvoice = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

// Optional: Fetch invoices for a specific customer
export const fetchInvoicesForCustomer = (customerId) => {
  return axios.get(`${BASE_URL}/customer/${customerId}`);
};
