export default function Footer() {
  return (
    <main className="bg-white p-1 ">
      <footer className="text-white p-5 justify-between bg-black sm:flex items-center border-2 rounded-lg">
        <div className="">
          <h1>LOGO</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
            Ut velit tenetur quae architecto ex aperiam aliquam, provi <br />
            dent rerum voluptatibus nostrum debitis
          </p>
          <h3>copy right 2025 </h3>
        </div>

        <div>
          <h1>About</h1>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <p>Privacy Poilcy </p>
          </ul>
        </div>

        <div>
          <h1>Support</h1>
          <h2>Contact</h2>
          <h2>Return</h2>
          <h2>FAQ</h2>
        </div>

        <div>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Descort</li>
            <li>X</li>
          </ul>
       
        </div>
      </footer>
    </main>
  );
}
