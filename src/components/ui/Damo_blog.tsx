import Post_card from "../Post_card";


export default function Damo_blog(){
    return(
        <main className="bg-white p-1 pt-5 pl-5 text-black h-screen">
            <div>
                <h1 className="text-2xl font-bold">Damo blog </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum quas, harum tenetur maxime minima necessitatibus</p>
            </div>
            <div className="pt-5">
                
            <Post_card />
            </div>

        </main>
    );
}