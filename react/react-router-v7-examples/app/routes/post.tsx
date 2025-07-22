import type { Route } from "./+types/post";

// loader vs clientLoader:
// - loader: Runs on the server (SSR/SSG) or at build time.
// - clientLoader: Runs only on the client. Used for client-side data fetching after navigation.
export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  return await res.json();
}

/*
// Example usage scenario for loader:
// This loader function runs on the server (SSR/SSG) or at build time.
// It fetches data securely from a backend before rendering the page.
// Useful for sensitive data or SEO-friendly content that should be available on initial load.
export async function loader({ params }: Route.LoaderArgs) {
  const product = await db.getProduct(params.id);
  return product;
}
*/

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>Title: {loaderData.title}</p>
      <p>Body: {loaderData.body}</p>
    </div>
  );
}
