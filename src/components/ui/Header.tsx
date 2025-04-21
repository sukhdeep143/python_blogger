import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <main className="flex justify-between pr-5 pl-5 bg-slate-200 p-5 items-center">
      <div>
        <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out ">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="Make your thought heard logo"
            className="rounded-xl"
          />
        </h1>
      </div>

      <ul className="sm:flex hidden">
        <Link href={"/Contact"}>
          <li className="pr-8 sm:text-xl text-white font-bold cursor-pointer hover:text-purple-800 hover:scale-110 transition-transform duration-300 ease-in-out ">
            Contact
          </li>
        </Link>

        <Link href={"/About"}>
          <li className="pr-8 sm:text-xl text-white  font-bold cursor-pointer hover:text-purple-800 hover:scale-110 transition-transform duration-300 ease-in-out ">
            About
          </li>
        </Link>
      </ul>

      <div className="flex text-xl font-bold gap-10 ">
        <Link href="/Login">
          <button className="p-1.5 bg-amber-50/75 text-purple-800 rounded-lg cursor-pointer">
            Login
          </button>
        </Link>

        <Link href="/Sign_Up">
          <button className="p-1.5 bg-amber-50/75 text-purple-800 rounded-lg cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
}
