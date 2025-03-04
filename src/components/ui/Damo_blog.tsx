import Image from "next/image";

export default function Damo_blog() {
  return (
    <main className=" bg-white p-1 items-center text-black ">
      <div className="pt-10">
        <h1 className="text-2xl font-bold text-center">Damo blog </h1>
        <p className="text-center pt-5 pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
          quas, harum tenetur maxime minima necessitatibus
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10  place-items-center">
        <div className="border rounded-3xl shadow-lg p-4 pb-5  grid-cols-2  max-w-sm bg-white ">
          {/* Image */}
          <Image
            src="/sunSet.webp"
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>

        <div className="border rounded-3xl shadow-lg p-4  grid-cols-2  max-w-sm bg-white">
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>

        <div className="border rounded-3xl shadow-lg p-4  grid-cols-2  max-w-sm bg-white">
          {/* Image */}
          <Image
            src="/mainBg.webp"
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>

        <div className="border rounded-3xl shadow-lg p-4  grid-cols-2  max-w-sm bg-white">
          {/* Image */}
          <Image
            src="/mainBg.webp"
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>

        <div className="border rounded-3xl shadow-lg p-4  grid-cols-2  max-w-sm bg-white">
          {/* Image */}
          <Image
            src="/sunSet.webp"
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>

        <div className="border rounded-3xl shadow-lg p-4  grid-cols-2  max-w-sm bg-white">
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
            Sunsets remind us of the beauty in endings. Whether its the colors
            or the peaceful ambiance, they create a moment of reflection and
            tranquility.
          </p>
        </div>
      </div>
    </main>
  );
}
