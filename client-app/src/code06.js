import React, { useState } from 'react';

const ImageUpload = () => {
  const [donorOrDonationId, setDonorOrDonationId] = useState('');
  const [imageUpload, setImageUpload] = useState(null);

  const handleIdChange = (event) => {
    setDonorOrDonationId(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('donorOrDonationId', donorOrDonationId);
    formData.append('imageUpload', imageUpload);

    fetch('/upload-image-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Image uploaded successfully:', data);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div>
      <h1>Upload Image for Donor or Donation</h1>

      <label htmlFor="donorOrDonationId">Donor or Donation ID:</label>
      <input
        type="text"
        id="donorOrDonationId"
        name="donorOrDonationId"
        value={donorOrDonationId}
        onChange={handleIdChange}
        required
      />

      <label htmlFor="imageUpload">Select Image:</label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

      <button type="button" onClick={uploadImage}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
