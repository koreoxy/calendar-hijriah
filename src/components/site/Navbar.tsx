import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isPageActive = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
        <div className="mx-auto w-full max-w-3xl spacey-20">
          <nav className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <Link to="/" className="font-bold text-2xl font-pacifico">
                Seulayan
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                className="block text-gray-800 hover:text-[#ff0000] focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden md:flex">
              <div className="flex items-center space-x-1">
                <Link
                  to="/"
                  className={`p-2 ${
                    isPageActive("/")
                      ? "text-[#ff0000]"
                      : "text-gray-800 hover:text-[#ff0000]"
                  }`}
                >
                  Beranda
                </Link>
                <Link
                  to="/sejarah"
                  className={`p-2 ${
                    isPageActive("/sejarah")
                      ? "text-[#ff0000]"
                      : "text-gray-800 hover:text-[#ff0000]"
                  }`}
                >
                  Sejarah
                </Link>
                <Link
                  to="/tim"
                  className={`p-2 ${
                    isPageActive("/tim")
                      ? "text-[#ff0000]"
                      : "text-gray-800 hover:text-[#ff0000]"
                  }`}
                >
                  Tim
                </Link>
                <Link
                  to="/faq"
                  className={`p-2 ${
                    isPageActive("/faq")
                      ? "text-[#ff0000]"
                      : "text-gray-800 hover:text-[#ff0000]"
                  }`}
                >
                  FAQ
                </Link>
              </div>
            </div>

            {isOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200">
                <div className="flex flex-col space-y-2 px-4 py-2">
                  <Link
                    to="/"
                    className={`block p-2 ${
                      isPageActive("/beranda")
                        ? "text-[#ff0000]"
                        : "text-gray-800 hover:text-[#ff0000]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Beranda
                  </Link>
                  <Link
                    to="/sejarah"
                    className={`block p-2 ${
                      isPageActive("/sejarah")
                        ? "text-[#ff0000]"
                        : "text-gray-800 hover:text-[#ff0000]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Sejarah
                  </Link>
                  <Link
                    to="/tim"
                    className={`block p-2 ${
                      isPageActive("/tim")
                        ? "text-[#ff0000]"
                        : "text-gray-800 hover:text-[#ff0000]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Tim
                  </Link>
                  <Link
                    to="/faq"
                    className={`block p-2 ${
                      isPageActive("/faq")
                        ? "text-[#ff0000]"
                        : "text-gray-800 hover:text-[#ff0000]"
                    }`}
                    onClick={toggleMenu}
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
