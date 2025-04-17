'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!title || !paragraph || !image) {
      alert('All fields are required');
      return;
    }
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('paragraph', paragraph);
    formData.append('image', image);
    
    try {
      const response = await fetch('https://python-backend-2sqb.onrender.com/create_post', {
        method: 'POST',
        body: formData,
      });
    
      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setTitle('');
        setParagraph('');
        setImage(null);
        setImagePreview(null);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Failed to submit post. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full border p-2 rounded" 
          />
        </div>

        <div>
          <label className="block font-semibold">Paragraph</label>
          <textarea 
            value={paragraph} 
            onChange={(e) => setParagraph(e.target.value)} 
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold">Upload Image</label>
          <input 
            type="file" 
            onChange={handleImageChange} 
            className="w-full border p-2 rounded"
          />
          {imagePreview && (
            <Image 
              src={imagePreview} 
              alt="Preview" 
              width={160} 
              height={160} 
              className="mt-2 object-cover rounded-lg" 
            />
          )}
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
