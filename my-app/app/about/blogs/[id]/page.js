export default function BlogPage({params}) {
    const {id} = params
    return (
      <div>
        <div className="mt-32">The blog id is {id}</div>
      </div>
    );
  }
  