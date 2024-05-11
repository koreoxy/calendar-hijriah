import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
      <h1 className="blox text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
        404
      </h1>
      <h1 className="block text-2xl font-bold text-white"></h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Uh oh! <br />
        The page you regueste wast not found
      </p>
      <Link to="/" className="hover:text-red-600">
        Back Home
      </Link>
    </div>
  );
};
