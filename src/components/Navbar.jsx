import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg shadow-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-2 cursor-pointer" src={logo} alt="Logo" />
            <h1 className="text-3xl ">Brielle</h1>
          </div>
          <ul className="hidden text-lg lg:flex ml-14 py-6 space-x-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 text-lg px-3 border rounded-md">
              Sign In
            </a> */}
            <a
              href="#"
              className="bg-gradient-to-r shadow-lg text-lg from-cyan-400 to-cyan-600 py-2 px-4 rounded-md"
            >
              Get Started
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gray-100 shadow-lg w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a> */}
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
