// src/app/post/[id]/page.tsx
import Image from "next/image";

interface Post {
  title: string;
  paragraph: string;
  image_path: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://python-backend-2sqb.onrender.com/get_post/${id}`, {
    cache: "no-store", // optional: disables caching for fresh data
  });

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return res.json();
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  // Destructure id from route parameters
  const { id } = params;

  // Fetch the post using the id
  const post = await getPost(id);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      {/* Show image only if path exists */}
      {post.image_path && (
        <Image
          src={`https://python-backend-2sqb.onrender.com${post.image_path}`}
          alt="Post Image"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      )}
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-700 mt-4">{post.paragraph}</p>
    </div>
  );
}
