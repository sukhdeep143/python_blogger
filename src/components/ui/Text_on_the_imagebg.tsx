import Image from "next/image";

export default function Text_on_the_imagebg() {
  return (
    <main className="overflow-hidden ">
      <div className="flex flex-col justify-center absolute bottom-20  sm:justify-between max-w-screen-xl w-full items-center mx-auto left-0 right-0">
          <div className="font-bold text-pink-600 sm:hidden top-10 ">
            LOGO 
          </div>
        <div className="items-center p-10 text-orange-700">
          <h1 className="font-bold text-2xl  text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            ea qui ullam odio nemo, ipsa incidunt temporibus repellendus et quia
            libero magni sit.
          </p>
        </div>
        <div>
          <div className="flex gap-1.5 items-center  ">
            <Image
              src="/sunSet.webp"
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full "
            />
            <h1 className="font-bold sm:text-2xl  ">Name of the person</h1>
          </div>
          <div className=" text-center ">
            <p>Location</p>
          <button className="p-3 rounded-3xl text-black font-bold bg-amber-50/75">
            Description
          </button>
          </div>

        </div>
      </div>
    </main>
  );
}
