import Image from "next/image";

export default function PostCard() {
  return (
    <div className="border rounded-3xl shadow-lg p-4       max-w-sm bg-white">
      {/* Image */}
      <Image
        src="/walking.webp"
        width={300}
        height={200}
        alt="Post Image"
        className="rounded-2xl w-full h-48 object-cover"
      />

      {/* Date & Reading Time */}
      <div className="text-gray-500 text-sm mt-3 flex justify-between">
        <span>March 2, 2025</span>
        <span>5 min read</span>
      </div>

      {/* Heading */}
      <h2 className="text-xl font-bold mt-2 text-gray-900">
        Capturing the Perfect Sunset
      </h2>

      {/* Paragraph (2 lines) */}
      <p className="text-gray-700 mt-2 line-clamp-2">
        Sunsets remind us of the beauty in endings. Whether its the colors or the peaceful ambiance, they create a moment of reflection and tranquility.
      </p>
    </div>
  );
}
