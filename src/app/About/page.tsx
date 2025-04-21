import React from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";

function AboutPage() {
  return (
    <div className="font-sans  text-center">
        <Header />
      {/* Top Section */}
      <section className=" relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        <div className="max-w-xl">
        

         

          <div className="pt-5 px-4 md:px-10 max-w-4xl mx-auto">
            

            <section className="mb-8">
              <h2 className="text-2xl font-semibold  text-purple-800 mb-3">
                👨‍💻 About This Website
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to <strong>Make Your Thoughts Heard</strong> — a
                universal blogging platform designed and developed by me,{" "}
                <strong>Sukhdeep Singh</strong>, a passionate Full Stack
                Developer. This platform was built with the vision of giving{" "}
                <strong>everyone a voice</strong>. Whether you`re a storyteller,
                thinker, artist, or just someone with a unique perspective, this
                is your space to{" "}
                <strong>share freely, connect globally, and be heard</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
              Sukhdeep Singh
            </h1>
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-3">
                I`m a <strong>MERN stack developer</strong> with experience in
                building responsive, scalable, and user-friendly web
                applications. Here’s a quick look at what I bring to the table:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                <li>
                  <strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3,
                  Tailwind CSS, Bootstrap
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, Python
                </li>
                <li>
                  <strong>Database:</strong> MongoDB, MySQL
                </li>
                <li>
                  <strong>Tools & Tech:</strong> Git, GitHub, REST APIs,
                  Postman, VS Code
                </li>
                <li>
                  <strong>Other Skills:</strong> UI/UX basics, Responsive
                  Design, Deployment (Netlify, Vercel, Render)
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                This website is not just a platform — it’s a product of my code,
                creativity, and commitment to open expression. Dive in, explore,
                and maybe even start blogging yourself!
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3">
          <Image
            src="/Sukhdeep.jpg"
            width={500}
            height={500}
            alt="Person listening to music"
            className="w-full h-auto rounded-xl object-cover shadow-2xl "
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
      </section>

     
    </div>
  );
}

export default AboutPage;
