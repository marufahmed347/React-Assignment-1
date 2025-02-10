import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavbarArea() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" bg-primary shadow-2xl">
        <div className="container mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div>
              <img src="logo.png" alt="" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-white">
              <li>
                <NavLink to="/About" className="hover:text-blue-500 " active="green">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/Pricing" className="hover:text-blue-500">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/Customers" className="hover:text-blue-500">
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink to="/Solutions" className="hover:text-blue-500">
                  Solutions
                </NavLink>
              </li>
            </ul>

            <div className="hidden md:flex space-x-2">
              <button className="bg-[#0FF1F6] text-black text-sm rounded-full cursor-pointer hover:shadow-[0px_0px_10px] hover:shadow-secondery/70 px-4 py-2.5">
                Book a Demo
              </button>
              <button className="text-white hover:shadow-[0px_0px_10px] hover:shadow-secondery/20 text-sm rounded-full px-4 py-2.5 border cursor-pointer">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary shadow-md h-screen">
            <div className="md:hidden text-center text-white">
              <NavLink
                to="/About"
                className="block px-4 py-2 ext-gray-700 hover:bg-gray-100"
              >
                About Us
              </NavLink>
              <NavLink
                to="/Pricing"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/Customers"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Customers
              </NavLink>
              <NavLink
                to="/Solutions"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Solutions
              </NavLink>
            </div>
            <div className="md:hidden space-y-2 m-1 flex flex-col">
              <button className="bg-[#0FF1F6] hover:bg-[#002228] hover:border text-black text-sm rounded-full p-[5px] cursor-pointer">
                Book a Demo
              </button>
              <button className="text-white hover:bg-[#0FF1F6] text-sm rounded-full p-[5px] border  cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarArea;
