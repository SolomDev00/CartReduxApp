import { NavLink, Link } from "react-router-dom";
import ImgBag from "../assets/cart.png";
import { useSelector } from "react-redux";
import { cartSelector } from "../app/features/cart/cartSlice";

const Navbar = () => {
  const { cartItems } = useSelector(cartSelector);

  return (
    <header className="w-full bg-transparent rounded-md mt-5 mb-10">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <Link
          to="/"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="text-gray-300">SolomShop</span>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <NavLink
              to={"/"}
              className="text-slate-400 md:mr-12 hover:text-slate-600 duration-500"
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/"}
              className="text-slate-400 md:mr-12 hover:text-slate-600 duration-500"
            >
              Features
            </NavLink>
            <NavLink to={"/cart"}>
              <div className="relative mr-4">
                <img className="w-7 cursor-pointer" src={ImgBag} alt="cart" />
                <div className="cart">{cartItems.length}</div>
              </div>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
