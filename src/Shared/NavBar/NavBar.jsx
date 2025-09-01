import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  const { user, logOut, setUser } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <Link
          to="/"
          className="px-4 py-2 hover:text-orange-400 transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="px-4 py-2 hover:text-orange-400 transition-colors"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="px-4 py-2 hover:text-orange-400 transition-colors"
        >
          Menu
        </Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-ghost relative">
            <FaShoppingCart className="mr-2 text-lg" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </button>
        </Link>
      </li>
    </>
  );

  return (
   <div className="pb-40">
     <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-purple-800 via-black to-purple-900 bg-opacity-90">
      <div className="navbar container mx-auto px-4 text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-gray-900 bg-opacity-95 rounded-lg w-52"
            >
              {navLink}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold hover:text-orange-400 transition"
          >
            <img className="h-10 rounded-full" src={logo} alt="logo" />
            Fast Speed
          </Link>
        </div>

        {/* Navbar Center (Desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navLink}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full border-2 border-orange-400 overflow-hidden hover:scale-105 transition">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="user" />
                  ) : (
                    <FaUserAlt className="bg-white text-orange-500 w-full h-full p-2" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow-xl menu menu-sm dropdown-content bg-gray-800 bg-opacity-95 rounded-lg w-52"
              >
                <li className="text-center text-lg font-semibold text-orange-400 border-b border-gray-600 pb-2 mb-2">
                  {user.displayName || "User"}
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-orange-400"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-white hover:text-red-400 transition"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary px-5 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default NavBar;
