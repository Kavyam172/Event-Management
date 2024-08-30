
import React, { useState } from 'react';
import './Getimg.css'; // Import CSS for styling

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="image-uploader">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
                <img src={image} alt="Selected" className="displayed-image" />
            )}
        </div>
    );
};

export default ImageUploader;
