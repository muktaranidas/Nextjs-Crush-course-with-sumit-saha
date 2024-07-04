import getPost from "@/lib/getPost";

export default async function Post({params}) {
    const {id} = params;
    const post = await getPost(id)
    return (
      <main className="mt-10">
        <h2 className="text-blue-500 font-bold">{post.title}</h2>
        <p className="mt-6">{post.body}</p>
       
      </main>   
    );
  }
  