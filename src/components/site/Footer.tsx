import { Github, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  <footer className="border-t p-10">
    <div className="mx-auto w-full max-w-3xl spacey-20">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col ">
          <div className="font-bold text-3xl font-pacifico">
            Calender-Hijriah
          </div>
          <div className="flex justify-center mt-5">
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
      </div>
      <div className="border-t mt-10">
        <p className="text-center mt-1 text-sm">
          &copy; Copyright 2024. Calender-Hijriah
        </p>
      </div>
    </div>
  </footer>;
};
