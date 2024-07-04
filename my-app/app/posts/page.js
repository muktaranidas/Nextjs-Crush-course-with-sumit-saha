import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts()
  console.log(posts)
    return (
      <div className="mt-6">
        <h1 className="bg-red-300">All Posts</h1>


        <ul >
            {
                posts.map((post => (<li className="m-8" key={post.id}> <Link href={`/posts/${post.id}`}> {post.title}</Link> </li>)))
            }
        </ul>
      </div>
    );
  }
  