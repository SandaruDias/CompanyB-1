import React from 'react';


function SearchResults() {
    const data = JSON.parse(localStorage.getItem('searchData'));

    return (
        <div>
            {data && data.map((item, index) => (
              <div key={index}>
                  <p>Email: {item.email}</p>
                  <p>Contact Number: {item.contact_number}</p>
                  <p>Name: {item.name}</p>
                  <p>Date of Concern: {item.date_of_concern}</p>
                  <p>Order ID: {item.order_id}</p>
                  <p>Order Received Date: {item.order_received_date}</p>
                  <p>Concern: {item.concern}</p>
                  <p>Status: {item.status}</p>
              </div>
          ))}
        </div>
    );
}

export default SearchResults;
