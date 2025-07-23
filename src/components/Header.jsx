import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react"; // Optional: install lucide-react for icons
import { NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">GigGallery</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-5 text-gray-700 font-medium md:items-center">
            <NavLink to='/' className="hover:text-blue-600">Home</NavLink>
            <a href="/categories" className="hover:text-blue-600">Categories</a>
            <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
            <a href="/login" className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600">Login</a>
            <a href="" className="border border-teal-500 rounded-md px-3 py-2 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">Sign up</a>
            <ShoppingCart className="text-teal-600"/>
          </nav>


          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <NavLink to="/" className="block hover:text-blue-600">Home</NavLink>
            <a href="/categories" className="block hover:text-blue-600">Categories</a>
            <NavLink to="/products" className="block hover:text-blue-600">Products</NavLink>
            <a href="/contact" className="block hover:text-blue-600">Contact</a>
            <a href="/login" className="block border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600">Login</a>
             <a href="" className="block border border-teal-500 rounded-md px-3 py-2 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">Sign up</a>
          </div>
        )}
      </div>
    </header>
  );
}
