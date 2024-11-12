
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Generate a list of paths for each post (using 'id' as the dynamic param)
  return posts.map((post) => ({
    id: post.id.toString(), // Convert 'id' to a string to match the dynamic param
  }));
}

export default async function Item({ params }) {
  // Await `params` to ensure it’s fully loaded before using its properties
  const { id } = await params;

  // Fetch data based on the dynamic 'id'
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const item = await res.json();

  // Render the item data
  return (
    <div className="pt-12">
      {item ? (
        <div className="flex flex-col">
          <h1>{item.id}</h1>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}