"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function User() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const userEmail = localStorage.getItem("userEmail"); // Get email from localStorage

      if (!userEmail) {
        setError("No user email found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://python-backend-2sqb.onrender.com/get_user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail }),
        });
      
        const data = await response.json();

        if (response.ok) {
          setUsername(data.username);
        } else {
          setError("User not found. Please check your login details.");
          console.error("User not found:", data.message);
        }
      } catch (error) {
        setError("Error fetching username. Please try again.");
        console.error("Error fetching username:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div>

   
    <main className="flex justify-between items-center p-5 bg-white/25 backdrop-blur sticky top-0 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform">
          LoGo
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/home">
          <Image
            src="/home.png"
            height={24}
            width={24}
            alt="Home"
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>

        <Link href="/write_An_Post">
          <Image
            src="/write_an_post.png"
            height={24}
            width={24}
            alt="Write post"
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        

        <Link href="/User">
          <Image
            src="/user_profile.png"
            height={24}
            width={24}
            alt="User profile"
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </main>
      <div className="text-center pt-10">
      {loading ? (
          <span className="text-gray-500">Loading...</span>
        ) : error ? (
          <span className="text-red-500">{error}</span>
        ) : (
          <span className="font-bold text-lg">Hello, {username}</span>
        )}
      </div>
    </div>
  );
}
