import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import Link from "next/link";

interface Post {
  title: string;
  paragraph: string;
  image_path: string | null;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://python-backend-2sqb.onrender.com/get_post/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return res.json();
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const post = await getPost(id);

  return (
    <div className="p-2">
      <main className="flex pr-5 pl-5 justify-between bg-purple-800 p-5 rounded-2xl items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-sm sm:text-xl font-bold cursor-pointer hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="Make your thought heard logo"
              className="rounded-xl"
            />
          </h1>
        </div>

        <Link href="/home">
          <h1 className="pr-8 text-sm sm:text-xl filter invert font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image src={"/home.png"} height={20} width={20} alt="Home" />
          </h1>
        </Link>
      </main>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-10">
        <div className="max-w-3xl mx-auto mt-5 bg-white shadow-lg rounded-lg p-6 sm:p-10">
          {post.image_path && (
            <Image
              src={`https://python-backend-2sqb.onrender.com${post.image_path}`}
              alt={post.title || "Post Image"}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
            />
          )}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">{post.title}</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4">{post.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
