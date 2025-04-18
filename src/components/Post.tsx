"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
  title: string;
  paragraph: string;
  image_path: string;
}

export default function Post() {
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

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6 m-10">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="p-4 bg-white shadow-2xl rounded-lg">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-gray-700">{post.paragraph}</p>
            <div className="mt-4 flex justify-center">
              <Image
                src={`https://python-backend-2sqb.onrender.com${post.image_path.startsWith("/") ? post.image_path : `/${post.image_path}`}`}
                // Correctly load images from backend
                alt="Post Image"
                width={300}
                height={300}

                className="rounded-lg"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
