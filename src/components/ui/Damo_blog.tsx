"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPosts() {
  const posts = [
    { img: "/sunSet.webp", title: "Capturing the Perfect Sunset", time: "5 min" },
    { img: "/walking.webp", title: "A Peaceful Evening Walk", time: "10 min" },
    { img: "/mainBg.webp", title: "Exploring Nature's Beauty", time: "7 min" },
    { img: "/mainBg.webp", title: "Moments of Tranquility", time: "2 min" },
    { img: "/sunSet.webp", title: "Golden Hour Magic", time: "4 min" },
    { img: "/walking.webp", title: "Finding Serenity", time: "8 min" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-center">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          className="border rounded-3xl shadow-lg p-4 pb-5 max-w-sm bg-white"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image */}
          <Image
            src={post.img}
            width={300}
            height={200}
            alt="Post Image"
            className="rounded-2xl w-full h-48 object-cover"
          />

          {/* Date & Reading Time */}
          <div className="text-gray-500 text-sm mt-3 flex justify-between">
            <span>March 2, 2025</span>
            <span>{post.time}</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold mt-2 text-gray-900">
            {post.title}
          </h2>

          {/* Paragraph (2 lines) */}
          <p className="text-gray-700 mt-2 line-clamp-2">
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </motion.div>
      ))}
    </div>
  );
}
