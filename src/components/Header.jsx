import { useState } from "react";
import { House, Menu, Phone, ShoppingCart, Store, User2Icon, X } from "lucide-react"; // Optional: install lucide-react for icons
import { NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">GigGallery</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 text-gray-700 font-medium md:items-center">
           
            <NavLink to='/' className={({ isActive }) =>
              `flex  items-center gap-2 px-3  py-2 group transition-all duration-300 delay-75 ease-in-out rounded-full ${
                isActive
                  ? "  text-teal-600 bg-teal-100 "
                  : "hover:text-teal-600 hover:bg-teal-100"
              }`
            }><House />Home</NavLink>
            <NavLink to="/products" className={({ isActive }) =>
              `flex  items-center gap-2 px-3  py-2 group transition-all duration-300 delay-75 ease-in-out rounded-full ${
                isActive
                  ? "  text-teal-600 bg-teal-100 "
                  : "hover:text-teal-600 hover:bg-teal-100"
              }`
            }><Store />Products</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              `flex  items-center gap-2 px-3  py-2 group transition-all duration-300 delay-75 ease-in-out rounded-full ${
                isActive
                  ? "  text-teal-600 bg-teal-100 "
                  : "hover:text-teal-600 hover:bg-teal-100"
              }`
            }><Phone />Contact</NavLink>
            <NavLink to="/login" className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600">Login</NavLink>
            <NavLink to="/signup" className="border border-teal-500 rounded-md px-3 py-2 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">Sign up</NavLink>

          </nav>
          <div className="flex gap-3">
            <NavLink to="/cart" className={({ isActive }) =>
              `px-2  py-2 group transition-all duration-300 delay-75 ease-in-out rounded-full ${
                isActive
                  ? "  text-teal-600 bg-teal-100 "
                  : "hover:text-teal-600 hover:bg-teal-100"
              }`
            }><ShoppingCart className="text-teal-600" /></NavLink>
            <NavLink to="/myaccount"  className={({ isActive }) =>
              `px-2  py-2 group transition-all duration-300 delay-75 ease-in-out rounded-full ${
                isActive
                  ? "  text-teal-600 bg-teal-100 "
                  : "hover:text-teal-600 hover:bg-teal-100"
              }`
            }> <User2Icon className="text-teal-600" /></NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <NavLink to='/' className="hover:text-teal-600 flex items-center gap-2 hover:bg-teal-100 px-3 py-2 rounded-full transition-all ease-in-out duration-500"><House/>Home</NavLink>
            <NavLink to="/products" className="hover:text-teal-600 flex items-center gap-2 hover:bg-teal-100 px-3 py-2 rounded-full transition-all ease-in-out duration-500"><Store/>Products</NavLink>
            <NavLink  to="/contact" className="hover:text-teal-600 flex items-center gap-2 hover:bg-teal-100 px-3  py-2 rounded-full transition-all ease-in-out duration-500"><Phone/>Contact</NavLink>
            <NavLink to="/login" className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600">Login</NavLink>
            <NavLink to="/signup" className="border border-teal-500 rounded-md px-3 py-2 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">Sign up</NavLink>

          </div>
        )}
      </div>
    </header>
  );
}
