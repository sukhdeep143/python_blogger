


export default function Header(){
    return(
        <main className="flex justify-between pr-5 pl-5 pt-3 items-center">
            <div>
                <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">LoGo</h1>
            </div>
            
            <ul className="sm:flex hidden">
                <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">Home</li>
                <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">Contact</li>
                <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">About</li>
                <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">Blog</li>

            </ul>

            
       

        <div className="flex text-xl font-bold gap-10">
            <button>

            Login
            </button>
        
            <button className="p-1.5 bg-amber-50/75 text-black rounded-lg">

            Sign Up
            </button>
        
        </div>
       
       


        </main>
    );
}



