import { Github, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
        <div className="mx-auto w-full max-w-3xl spacey-20">
          <nav className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <Link to="/" className="font-bold text-2xl font-pacifico">
                Calender-Hijriah
              </Link>
            </div>

            <div className="flex">
              <div className="flex items-center space-x-1">
                <Link
                  to="https://github.com/koreoxy"
                  className="p-2 text-gray-800 hover:text-[#ff0000]"
                >
                  <Github />
                </Link>
                <Link
                  to="https://youtube.com/@1sh1sh"
                  className="p-2 text-gray-800 hover:text-[#ff0000]"
                >
                  <Youtube />
                </Link>
                <Link
                  to="https://twitter.com/koreoxy"
                  className="p-2 text-gray-800 hover:text-[#ff0000]"
                >
                  <Twitter />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
