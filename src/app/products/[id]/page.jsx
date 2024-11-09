// app/item/[id]/page.js
import { use } from 'react';

// This function generates paths for dynamic routes at build time
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Generate a list of paths for each post (using 'id' as the dynamic param)
  return posts.map((post) => ({
    id: post.id.toString(), // Convert 'id' to a string to match the dynamic param
  }));
}

// Fetching the data inside the component
export default function Item({ params }) {
  const { id } = params;

  // Fetching data based on the dynamic 'id'
  const item = use(fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then(res => res.json()));

  // Render the item data
  return (
    <div className="pt-12">
      {item.length > 0 ? (
        <div className="flex flex-col">
          <h1>{item[0].id}</h1>
          <p>{item[0].title}</p>
          <p>{item[0].body}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}
