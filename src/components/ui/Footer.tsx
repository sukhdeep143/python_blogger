export default function Footer() {
  return (
    <main className="bg-white p-1 pt-10 text-center ">
      <footer className="text-white p-5 pt-10  pb-10 justify-between bg-black sm:flex items-center border-2 rounded-lg">
        <div className="">
          <h1 className="font-bold pb-5 cursor-pointer ">LOGO</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
            Ut velit tenetur quae architecto ex aperiam aliquam, provi <br />
            
          </p>
      <h3 className="pt-5">&copy; All Copy Right to Sukhdeep, 2025 </h3>

          
        </div>

        <div className=" pt-10  ">
          <h1 className="font-bold pb-3 cursor-pointer ">About</h1>
          <ul className="">
            <li className="cursor-pointer pb-2">Home</li>
            <li className="cursor-pointer pb-2">Blog</li>
            <p  className="cursor-pointer pb-2">Privacy Poilcy </p>
          </ul>
        </div>

        <div className="pt-10 ">
          <h1 className="font-bold pb-3 cursor-pointer ">Support</h1>
          <h2  className="cursor-pointer pb-2">Contact</h2>
          <h2  className="cursor-pointer pb-2">Return</h2>
          <h2  className="cursor-pointer pb-2">FAQ</h2>
        </div>

        <div className="pt-10 ">
          <h1 className="font-bold pb-3 cursor-pointer ">Socail Media</h1>
          <ul>
            <li  className="cursor-pointer pb-2">Facebook</li>
            <li className="cursor-pointer pb-2">Instagram</li>
            <li className="cursor-pointer pb-2">X</li>
          </ul>
       
        </div>
      </footer>
    </main>
  );
}
