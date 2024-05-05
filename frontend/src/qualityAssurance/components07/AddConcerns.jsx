import './AddConcerns.css';
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';


function AddConcern() {
    
    const Navigate = useNavigate();
    const [postConcern, setPostConcern] = useState({
      Email: String,Contact_number:String,Name:String,String,Date_of_concern:String,Order_id:String,Order_received_date:String,Concern:String,Status:String
  });

  const handleChange = (event) => {
      setPostConcern({
          ...postConcern,
          [event.target.name]: event.target.value
      });
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8080/postConcern', postConcern)
          .then(response => {
              console.log(response.data);
              setPostConcern({
                email: '',
                contact_number: '',
                name: '',
                date_of_concern: '',
                order_id: '',
                order_received_date: '',
                concern: '',
                status: ''
            });
            // Show a popup message
            alert('Post added successfully!');
          })
          .catch(error => {
              console.error('Error adding post: ', error);
          });
  }
  
  

  return (
    <div>
        <h1 className='title'>Add Your Concern Here !</h1>
    <form className='Form' onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" value={postConcern.email} onChange={handleChange} />
        <input type="text" name="contact_number" placeholder="Contact Number" value={postConcern.contact_number} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={postConcern.name} onChange={handleChange} />
        <input type="text" name="date_of_concern" placeholder="Date of Concern" value={postConcern.date_of_concern} onChange={handleChange} />
        <input type="text" name="order_id" placeholder="Order ID" value={postConcern.order_id} onChange={handleChange} />
        <input type="text" name="order_received_date" placeholder="Order Received Date" value={postConcern.order_received_date} onChange={handleChange} />
        <input type="text" name="concern" placeholder="Concern" value={postConcern.concern} onChange={handleChange} />
        {/* <select className='select' name="status" value={postConcern.status} onChange={handleChange}>
                <option value="">Select status</option>
                <option value="Reviewed">Reviewed</option>
                
            </select> */}
        <Button className='Button' type="submit">Add Post</Button>
    </form>
    </div>
);

}
 


export default AddConcern
