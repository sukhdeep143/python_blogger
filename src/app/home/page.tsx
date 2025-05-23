"use client";
import { useEffect, useState } from "react";
import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";

// 💫 Small Centered Spinner Component
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 z-50">
      <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading after navigating to Home page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // You can adjust the delay time here

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="p-2 bg-slate-200/25">
      {loading && <Loading />}

      <header className="flex justify-between bg-purple-800 p-5 rounded-2xl backdrop-blur items-center sticky top-0">
        <div>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-2xl"
          />
        </div>
        

        <Link href="/home">
          <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image className="filter invert grayscale" src={"/home.png"} height={20} width={20} alt="Home" />
          </h1>
        </Link>
        <Link href="/write_An_Post">
          <Image
            src="/write_an_post.png"
            height={24}
            width={24}
            alt="Write post"
            className="cursor-pointer filter invert grayscale hover:scale-110 transition-transform"
          />
        </Link>

        <Link href="/User">
          <Image
            src={"/user_profile.png"}
            height={20}
            width={20}
            alt="User Profile"
            className="cursor-pointer filter invert grayscale hover:scale-110 transition-transform"
          />
        </Link>
        
      </header>

      {/* Show Posts Only When Not Loading */}
      {!loading && <Post />}
    </main>
  );
}
