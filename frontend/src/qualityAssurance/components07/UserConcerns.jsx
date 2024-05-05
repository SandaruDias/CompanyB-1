import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserConcerns.css';
import Button from '@mui/material/Button';
import axios from 'axios';




function UserConcerns() {
    const [data, setData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [text, setText] = useState(''); // Initialize text state
    const [searchTrigger, setSearchTrigger] = useState(false);
    
    const navigate = useNavigate();

    const handleSearchClick = () => {
        // Fetch the data here
        axios.get(`http://localhost:8080/costomerConcerns/${text}`)
            .then(response => {
                // Save the data to local storage or context
                localStorage.setItem('searchData', JSON.stringify(response.data));
                // Navigate to the search results page
                navigate('/quality-assurance/UserConcerns/search-results');
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }


useEffect(() => {
    if (text) { // Only make the request if text is not empty
        axios.get(`http://localhost:8080/costomerConcerns/${text}`)
            .then(response => {
                setSearchData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }
}, [searchTrigger]); // This useEffect runs whenever the searchTrigger state changes



    useEffect(() => {
        axios.get('http://localhost:8080/costomerConcerns')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []);

    useEffect(() => {
        if (text) { // Only make the request if text is not empty
            axios.get(`http://localhost:8080/costomerConcerns/${text}`)
                .then(response => {
                    setSearchData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                })
        }
    }, [text]); // This useEffect runs whenever the text state changes

    const handleSearchChange = (event) => {
        setText(event.target.value);
    }

    
    

    return (
        <> 
        <input className='searchText' type="text" value={text} onChange={e => setText(e.target.value)} />
        <Button className='Button1' onClick={handleSearchClick}>Search</Button>
        
        <div className='container'>
            {data && data.map((item, index) => (
              <div className='output'key={index}>
                  <p>Email              :{item.email}</p>
                  <p>Contact Number     : {item.contact_number}</p>
                  <p>Name               : {item.name}</p>
                  <p>Date of Concern    : {item.date_of_concern}</p>
                  <p>Order ID           : {item.order_id}</p>
                  <p>Order Received Date: {item.order_received_date}</p>
                  <p>Concern            : {item.concern}</p>
                  <p>Status             : {item.status}</p>
              </div>
          ))}
        </div>
        </>
       
    );
}

export default UserConcerns;
