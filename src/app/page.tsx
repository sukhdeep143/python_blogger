// import Image from "next/image";

import Landing_page from "@/components/Landing_page";
import LoadingSpinner from "./loading";
import { Suspense } from 'react'


export default function Home() {
  return (
    //  This div is using for main background for the blogger we are going to create
    <main className=" " >
      {/* <Suspense  fallback={<LoadingSpinner />}>
      <Landing_page  />
      <Suspense/> */}

      <Suspense fallback={<p><LoadingSpinner /></p>}>
      <Landing_page  />

      </Suspense>
    

   </main>
  );
}
