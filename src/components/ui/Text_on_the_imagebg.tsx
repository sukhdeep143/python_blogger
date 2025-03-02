import Image from "next/image";
export default function Text_on_the_imagebg() {
  return (
    <main className="overflow-hidden">
     <div className="flex absolute bottom-10 justify-between max-w-screen-xl w-full items-center mx-auto left-0 right-0">

        <div>
          <div className=" pb-4">
            <button className="p-3 rounded-3xl text-black font-bold bg-amber-50/75">
              Description
            </button>
          </div>
          <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            ea qui
          </p>
          <p>
            ullam odio nemo, ipsa incidunt temporibus repellendus et quia libero
            magni sit l
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
        <div className="pl-50">
          <p>Location</p>

        </div>
            </div>
      </div>
    </main>
  );
}
