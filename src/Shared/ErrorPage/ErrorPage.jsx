import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
              <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-purple-900 to-black text-white p-6">
      
      {/* Big 404 Heading */}
      <h1 className="text-9xl font-extrabold tracking-widest text-red-500 drop-shadow-lg">
        404
      </h1>

      {/* Subheading */}
      <p className="text-2xl mt-4 font-semibold">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Description */}
      <p className="text-gray-300 mt-2 mb-8 max-w-md text-center">
        It looks like the page you were trying to reach is no longer available or never existed. 
        Don’t worry, you can go back to the home page.
      </p>

      {/* Home Button */}
       <Link to="/">
        <button className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:bg-red-600">
          ⬅ Back to Home
        </button>
      </Link>

      {/* Decorative Glow Circle */}
      
    </div>

          
            
        </div>
    );
};

export default ErrorPage;