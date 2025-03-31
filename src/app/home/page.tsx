import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between p-5 bg-white/25 backdrop-blur items-center sticky top-0">
        <div>
          <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out">
            LoGo
          </h1>
        </div>

        <Link href="/home">
          <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image src={"/home.png"} height={20} width={20} alt="Home" />
          </h1>
        </Link>

        <Link href="/User">
          <Image src={"/user_profile.png"} height={20} width={20} alt="User Profile" />
        </Link>
      </header>

      {/* Render All Posts Here */}
      <Post />
    </main>
  );
}
