import React from 'react';
import './ContactUs.css'; 

function ContactUs() {
  return (
    <>
    <h2 className='title'>Contact Us</h2>
    <div className="contact-container">
        <div className="contact-info">
        <h3 className='topic'>Quality Assuarance Managers</h3>
        <div className="manager-details">
            
          <div className="manager">
            <ul>
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Contact Number:</strong> +1234567890</li>
              <li><strong>Position:</strong> Manager</li>
              <li><strong>Email:</strong> john.doe@example.com</li>
            </ul>
          </div>
          <div className="manager">
            
            <ul>
              <li><strong>Name:</strong> Jane Doe</li>
              <li><strong>Contact Number:</strong> +9876543210</li>
              <li><strong>Position:</strong> Manager</li>
              <li><strong>Email:</strong> jane.doe@example.com</li>
            </ul>
          </div>
        </div>
        <h4 className='topic'>Visit Us</h4>
        <div className="map">
          {/* Google Maps iframe with University of Moratuwa, Katubedda, Sri Lanka */}
          <iframe
            title="Google Maps"
            width="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?q=University%20of%20Moratuwa%2C%20Katubedda%2C%20Sri%20Lanka&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
