'use client'
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextOnImageBg() {
  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

  return (
    <main className="overflow-hidden relative h-screen flex items-center place-items-center justify-center">
      <motion.section
        style={{ scale: scaleValue, opacity: opacityValue }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-screen-xl w-full text-center px-5 sm:px-10"
      >
        <div className=" font-bold  text-pink-600 sm:hidden">
          <h1>LOGO</h1>
        </div>

        
        <div className="text-white shadow-amber-50 place-items-center p-5">
          <h1 className="font-bold text-2xl cursor-default ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-2 cursor-default ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente ea qui ullam odio nemo,
            ipsa incidunt temporibus repellendus et quia libero magni sit.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mt-5">
          <div className="flex gap-2 items-center">
            <Image
              src="/sunSet.webp"
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
            />
            <h1 className="cursor-default font-bold text-black sm:text-2xl">Name of the person</h1>
          </div>
          <p className="font-bold cursor-default  text-black sm:text-md">Location</p>
          <button className="px-4 py-2 rounded-3xl text-black font-bold bg-amber-50/75 transition-all duration-300 hover:bg-amber-100 cursor-pointer">
            Description
          </button>
        </div>
      </motion.section>
    </main>
  );
}
