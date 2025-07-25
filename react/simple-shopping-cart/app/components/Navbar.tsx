import { Link } from "react-router";

function Navbar() {
  return (
    <header className="flex justify-between items-centers w-full bg-gray-800 text-white p-5">
      <div>
        <Link to="/" className="text-xl ">
          Shopping Cart
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <p>About</p>
        <div className="border-1 w-[75px] h-[30px] rounded-sm text-center">
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
