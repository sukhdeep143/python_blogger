import { useEffect, useState } from "react";
import Image from "next/image";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/get_posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.paragraph}</p>
              <Image src={post.image_path} alt={post.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
