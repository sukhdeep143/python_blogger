


export default function Header(){
    return(
        <main className="flex justify-between pr-5 pl-5 pt-2 items-center">
            <div>
                <h1>LoGo</h1>
            </div>
            
            <ul className="flex ">
                <li className="pr-8">Home</li>
                <li className="pr-8">Contact</li>
                <li className="pr-8">About</li>
                <li className="pr-8">Blog</li>

            </ul>

            <input type="search"  placeholder="Search here..." className="border p-2 rounded-lg " />
       

        <div className="flex gap-10">
            <button>

            Login
            </button>
        
            <button className="p-1.5 bg-white text-black rounded-lg">

            Sign Up
            </button>
        
        </div>
       
       


        </main>
    );
}



