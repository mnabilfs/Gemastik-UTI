import React from "react";
import Logo from "../assets/logo1.png";
import Avatar from "../assets/avatar.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-10" alt="Human After Tech Logo" />
        </a>

        {/* RIGHT SECTION */}
        <div className="flex items-center space-x-5 md:order-2">
          {/* SUN ICON */}
          <button
            type="button"
            className="flex items-center justify-center text-gray-900 cursor-pointer hover:text-gray-500 focus:outline-none"
            aria-label="Toggle light/dark mode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>

          <span className="text-lg text-gray-300 select-none">
            |
          </span>

          <button
            type="button"
            className="flex items-center justify-center text-sm bg-gray-800 rounded-full cursor-pointer focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="object-cover rounded-full w-9 h-9"
              src={Avatar}
              alt="user photo"
            />
          </button>

          {/* DROPDOWN */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900">Muhammad Nabil F S</span>
              <span className="block text-sm text-gray-500 truncate">
                mnabilfs@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/chat"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Setting
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
