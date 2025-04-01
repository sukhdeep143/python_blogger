// import Image from "next/image";

import Landing_page from "@/components/Landing_page";
import LoadingSpinner from "./loading";
import { Suspense } from 'react'


export default function Home() {
  return (
    
    <main className=" " >
      

      <Suspense fallback={<p><LoadingSpinner /></p>}>
      <Landing_page  />

      </Suspense>
    

   </main>
  );
}
