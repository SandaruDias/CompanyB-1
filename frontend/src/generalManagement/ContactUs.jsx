import React, { useState, useEffect } from 'react';

export default 
function ContactUs() {
    // State variables for fetched data, loading, and error
    const [contactUsData, setContactUsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch "Contact Us" data
    const fetchContactUsData = async () => {
        try {
            // Fetch data from the API
            const response = await fetch('http://localhost:8090/api/user/conusout');
            const data = await response.json();

            // Update state with the fetched data
            setContactUsData(data);
        } catch (err) {
            // Update error state if there's an error
            setError(err);
        } finally {
            // Update loading state
            setLoading(false);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchContactUsData();
    }, []);

    // Return JSX to render the landing page content
    return (
        <div>
            

            {/* Display loading message while fetching data */}
            {loading && <p>Loading Contact Us data...</p>}

            {/* Display error message if there's an error */}
            {error && <p>Error: {error.message}</p>}

            {/* Display the "Contact Us" data */}
            {contactUsData && (
                <div>
                    <h2>Contact Us Response</h2>
                    <pre>{JSON.stringify(contactUsData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

