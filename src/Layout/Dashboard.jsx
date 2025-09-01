import { Helmet } from "react-helmet-async";
import { FaAd, FaHome, FaList, FaListAlt, FaParagraph, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGetAllUsers from "../hooks/useGetAllUsers";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const [users] = useGetAllUsers();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const newUser = users.find(man => man.email === user.email);
  const isAdmin = newUser?.role === 'admin';
  const isDeliveryMan = newUser?.role === 'deliveryMan';
  const isUser = newUser?.role === 'user';

  const menuItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-700 hover:text-white transition-colors ${
      isActive ? "bg-red-700 text-white font-semibold" : "text-white"
    }`;

  return (
    <div className="flex h-screen overflow-hidden">
      <Helmet>
        <title>Fast Food | Dashboard</title>
      </Helmet>

      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-red-900 to-red-800 text-white transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}>
        {/* Toggle Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:text-yellow-400 transition"
          >
            {sidebarOpen ? "⬅" : "➡"}
          </button>
        </div>

        {/* Menu */}
        <ul className="flex-1 overflow-auto space-y-2 p-2">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/addItems" className={menuItemClass}>
                  <FaUtensils /> {sidebarOpen && "Add Item"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addedList" className={menuItemClass}>
                  <FaUtensils /> {sidebarOpen && "Added List"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allParcel" className={menuItemClass}>
                  <FaParagraph /> {sidebarOpen && "All Parcel"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers" className={menuItemClass}>
                  <FaUsers /> {sidebarOpen && "All Users"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allDeliveryMan" className={menuItemClass}>
                  <MdDeliveryDining /> {sidebarOpen && "All Delivery Men"}
                </NavLink>
              </li>
            </>
          )}

          {isDeliveryMan && (
            <>
              <li>
                <NavLink to="/dashboard/deliveryList" className={menuItemClass}>
                  <FaListAlt /> {sidebarOpen && "My Delivery List"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" className={menuItemClass}>
                  <FaAd /> {sidebarOpen && "My Review"}
                </NavLink>
              </li>
            </>
          )}

          {isUser && (
            <>
              <li>
                <NavLink to="/dashboard/profile" className={menuItemClass}>
                  <FaUser /> {sidebarOpen && "My Profile"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings" className={menuItemClass}>
                  <FaList /> {sidebarOpen && "My Bookings"}
                </NavLink>
              </li>
            </>
          )}

          <div className="divider border-t border-red-700 my-2"></div>

          <li>
            <NavLink to="/" className={menuItemClass}>
              <FaHome /> {sidebarOpen && "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={menuItemClass}>
              <FaSearch /> {sidebarOpen && "Menu"}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
