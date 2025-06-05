"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

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
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraph);
    formData.append("image", image);

    setLoading(true);
    try {
      const response = await fetch(
        "https://python-backend-2sqb.onrender.com/create_post",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setTitle("");
        setParagraph("");
        setImage(null);
        setImagePreview(null);
      } else {
        alert(`Error: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("Failed to submit post. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2">
      {/* Header */}
      <main className="flex justify-between pr-5 pl-5 bg-purple-800 p-5 rounded-2xl items-center">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-xl cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>

        <Link href="/home">
          <Image
            src="/home.png"
            height={24}
            width={24}
            alt="Home"
            className="cursor-pointer filter invert hover:scale-110 transition-transform"
          />
        </Link>
      </main>

      {/* Form */}
      <div className="pt-14 pb-14 shadow-2xl">
        <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Create a New Post</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block font-semibold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Enter post title"
              />
            </div>

            {/* Paragraph */}
            <div>
              <label className="block font-semibold">Paragraph</label>
              <textarea
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Write something..."
              ></textarea>
            </div>

            {/* Image */}
            <div>
              <label className="block font-semibold">Upload Image</label>
              <input
                type="file"
                accept="image/*"
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-4 py-2 rounded`}
            >
              {loading ? "Posting..." : "Submit Post"}
            </button>
          </form>
        </div>

        {/* Go Home */}
        <Link href="/home">
          <div className="text-center mt-5">
            <button className="p-2 rounded-2xl bg-purple-700 text-white hover:bg-purple-600 transition">
              Go To Home Page
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
