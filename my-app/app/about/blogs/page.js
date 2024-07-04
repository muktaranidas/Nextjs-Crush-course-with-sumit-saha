import Link from "next/link";

export default function Blogs() {
    // throw new Error("There was a huge err")
    const blogs =[
    {
      id:1,
      name: "Sudipto",
      age:10,
    },
    {
      id:2,
      name: "Mukta",
      age:50,
    },
  ]
    return (
      <main className="mt-10">  
        <div className="mb-6 bg-red-300" >Blog page</div>
        <ul>
            {
              blogs.map((blog) => (<li className="mb-6"  key={blog.id}> <Link href={`/about/blogs/${blog.id}`}> {blog.name}</Link></li>)) 
            }
        </ul>
      </main>
    );
  }
  