import React, { useState } from 'react';
import axios from 'axios';

function PrototypeCreationForm() {
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState('');
    const [color, setColor] = useState('');
    const [shape, setShape] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('material', material);
        formData.append('color', color);
        formData.append('shape', shape);
        formData.append('comments', comments);

        try {
            const response = await axios.post('http://localhost:8090/tps/prototypes/create', formData, {
                headers: {
                    'Content-Type': 'multipart/file'
                }
            });
            console.log('Prototype created with ID:', response.data);
            // Optionally handle success (e.g., show a success message)
        } catch (error) {
            console.error('Failed to create prototype:', error);
            // Optionally handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <h2>Create Prototype</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>File:</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                </div>
                <div>
                    <label>Material:</label>
                    <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} required />
                </div>
                <div>
                    <label>Color:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
                </div>
                <div>
                    <label>Shape:</label>
                    <input type="text" value={shape} onChange={(e) => setShape(e.target.value)} required />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PrototypeCreationForm;
