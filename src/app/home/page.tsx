import Post from "@/components/Post"
import Image from "next/image"
import Link from "next/link"


export default function home(){
    return (
      <main>
        <main className="flex justify-between p-5 bg-white/25 backdrop-blur  items-center sticky top-0 ">
          <div>
            <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">
              LoGo
            </h1>
          </div>

          <Link href="/user">
            <Image
              src={"/user_profile.png"}
              height={20}
              width={20}
              alt="user profile"
            />
          </Link>
        </main>
        <Post />
      </main>
    );
}