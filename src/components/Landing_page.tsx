import Header from "@/components/ui/Header";
import Text_on_the_imagebg from "./ui/Text_on_the_imagebg";
import Damo_blog from "./ui/Damo_blog";
import Footer from "./ui/Footer";

export default function Landing_page() {
  return (
    <main className="bg-white  ">
      <div className="h-screen p-1 bg-[url('/mainBg.webp')] bg-cover bg-center border-2 rounded-lg">
        <Header />
        <Text_on_the_imagebg />
        
      </div>
      <Damo_blog />
      <Footer />
      
    </main>
  );
}
