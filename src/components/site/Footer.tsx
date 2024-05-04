import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const isPageActive = (pathname: string) => {
    return location.pathname === pathname;
  };
  return (
    <footer className="border-t p-10">
      <div className="mx-auto w-full max-w-3xl spacey-20">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-3xl">Seulayan</div>
          <div className="flex flex-row gap-16">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Links</h1>
              <Link
                to="/"
                className={`${
                  isPageActive("/")
                    ? "text-[#ff0000]"
                    : "text-gray-800 hover:text-[#ff0000]"
                }`}
              >
                Beranda
              </Link>
              <Link
                to="/sejarah"
                className={`${
                  isPageActive("/sejarah")
                    ? "text-[#ff0000]"
                    : "text-gray-800 hover:text-[#ff0000]"
                }`}
              >
                Sejarah
              </Link>
              <Link
                to="/tim"
                className={`${
                  isPageActive("/tim")
                    ? "text-[#ff0000]"
                    : "text-gray-800 hover:text-[#ff0000]"
                }`}
              >
                Tim
              </Link>
              <Link
                to="/faq"
                className={`${
                  isPageActive("/faq")
                    ? "text-[#ff0000]"
                    : "text-gray-800 hover:text-[#ff0000]"
                }`}
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Contact</h1>
              <h2>Email</h2>
              <h2>Alamat</h2>
              <h2>Phone</h2>
            </div>
          </div>
        </div>
        <div className="border-t mt-2">
          <p className="text-center mt-1 text-sm">
            &copy; Copyright 2024. Seulayan
          </p>
        </div>
      </div>
    </footer>
  );
};
