// import Image from "next/image";

import Header from "@/components/ui/Header";

export default function Home() {
  return (
    //  This div is using for main background for the blogger we are going to create
    <main className="p-1 bg-white" >
    <div className="h-screen bg-[url('/mainBg.webp')] bg-cover bg-center border-2 rounded-lg">
    <Header />
    </div>
    

   </main>
  );
}
