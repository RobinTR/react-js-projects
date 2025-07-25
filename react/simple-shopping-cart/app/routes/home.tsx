import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ProductList from "~/components/ProductList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shopping" },
    { name: "description", content: "Welcome to Shopping Site!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-gray-700 min-h-screen">
      <Navbar />
      <ProductList />
    </main>
  );
}
