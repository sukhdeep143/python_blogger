import React from "react";
// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-slate-200 dark:bg-black w-full overflow-hidden text-center">
         <section className="bg-purple-800 text-white py-16 px-10 md:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex items-center text-white text-6xl font-bold">
            <span className="text-white">Make Your Thought Heard</span>
            <span className="t rotate-45 text-red-500">s</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Meet Sukhdeep singh.</h2>
            <h1 className="text-lg mb-2">We Make You`r Thought Heard To World.</h1>
            <h1 className="text-sm text-gray-300">
            🌐 Welcome to Make Your Thoughts Heard A universal blogging platform
            where your voice matters. Whether you`re a passionate writer, a
            curious thinker, or someone with a story to tell — this is your
            space to express freely. Share ideas, experiences, opinions, or
            creative content on any topic — from lifestyle and travel to
            science, tech, poetry, and everything in between. 🖋️ What you can do
            here: ✍️ Write and publish blogs on any subject 🌎 Connect with a
            global audience 💬 Engage in meaningful discussions 📢 Amplify your
            voice and inspire others No rules. No limits. Just pure, honest
            expression.
            </h1>
        {/* Information Section */}
        <div className="flex justify-center items-center flex-col pt-3">
          <h1 className="text-2xl font-bold text-white">Information</h1>
          <div className="text-center">
            <Link href="/About">
              <p>About Us</p>
            </Link>
            {/* <Link href="/contact">
              <p>Contact Us</p>
            </Link> */}
          </div>
        </div>
          </div>
        </div>
      </section>

    
      <div className="border-t dark:border-white border-black pb-5">

        <div className="p-10 flex justify-center items-center">
          <h1 className="text-center">
            Copyright © 2025 All Rights Reserved | Sukhdeep singh
          </h1>
        </div>
      </div>
    </main>
  );
}
