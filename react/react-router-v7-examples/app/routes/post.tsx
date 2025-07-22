import { Form, redirect, useFetcher, useNavigate } from "react-router";
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

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch (err) {
    return { isDeleted: false };
  }
}

/*
fetcher.Form is a special Form component from React Router that allows you to submit data
without causing a full page reload. It handles the form submission asynchronously and updates
the UI based on the fetcher state, making it ideal for client-side mutations like delete, update, etc.
*/
export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const isDeleted = fetcher.data?.isDeleted;
  const navigate = useNavigate();

  return (
    <div>
      {!isDeleted && (
        <>
          <p>Title: {loaderData.title}</p>
          <p>Body: {loaderData.body}</p>
        </>
      )}
      <button onClick={() => navigate("/")}>Redirect</button>
      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}

/*
export async function clientAction({ params }: Route.LoaderArgs) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
    method: "DELETE",
  });
  return redirect("/");
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>Title: {loaderData.title}</p>
      <p>Body: {loaderData.body}</p>
      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
*/
