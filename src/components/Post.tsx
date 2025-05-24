// components/PostCard.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string; // or id if your backend uses "id"
  title: string;
  paragraph: string;
  image_path: string;
}

export default function PostCard() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://python-backend-2sqb.onrender.com/get_posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const getShortTitle = (title: string) =>
    title.split(" ").slice(0, 8).join(" ") + (title.split(" ").length > 8 ? "..." : "");

  const getShortParagraph = (text: string) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">No posts available.</p>
      ) : (
        posts.map((post) => (
          <Link href={`/post/${post._id}`} key={post._id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <Image
                src={`https://python-backend-2sqb.onrender.com${post.image_path.startsWith("/") ? post.image_path : `/${post.image_path}`}`}
                alt="Post Image"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{getShortTitle(post.title)}</h2>
                <p className="text-gray-700">{getShortParagraph(post.paragraph)}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
