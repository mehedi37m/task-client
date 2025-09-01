import { Helmet } from "react-helmet-async";
import { FaAd, FaHome, FaList, FaListAlt, FaParagraph, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGetAllUsers from "../hooks/useGetAllUsers";


const Dashboard = () => {

  const {user} = useAuth();

  const [users] = useGetAllUsers();

  const newUser = users.find(man =>man.email == user.email)

  console.log(newUser)
    
  const isAdmin = newUser.role == 'admin';
  const isDeliveryMan = newUser.role == 'deliveryMan';
  const isUser = newUser.role == 'user';

  // console.log(isUser)
  // console.log(user)
    
  return (
    <div>
       <Helmet>
        <title>Fast Food | Dashboard</title>
      </Helmet>
      <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen text-white bg-red-800">
        <ul className="menu p-4">

         {
          isAdmin && (<>
           <li>    
            <NavLink to="/dashboard/statistics"> <FcStatistics></FcStatistics> Statistics</NavLink>
          </li>
          <li>    
            <NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add Item</NavLink>
          </li>
          <li>    
            <NavLink to="/dashboard/addedList"> <FaUtensils></FaUtensils> AddedList</NavLink>
          </li>
       
          <li>    
            <NavLink to="/dashboard/allParcel"> <FaParagraph></FaParagraph> All Parcel</NavLink>
          </li>
          <li>    
            <NavLink to="/dashboard/allUsers"> <FaUsers></FaUsers> All Users</NavLink>
          </li>
          <li>    
            <NavLink to="/dashboard/allDeliveryMan"> <MdDeliveryDining></MdDeliveryDining> All Delivery Men</NavLink>
          </li>

          
          </>)
         }
          
           
         
         { isDeliveryMan && (<> <li>    
            <NavLink to="/dashboard/deliveryList"> <FaListAlt></FaListAlt> My Delivery List</NavLink>
          </li>

          <li>    
            <NavLink to="/dashboard/review"> <FaAd></FaAd>My Review</NavLink>
          </li>
          </>)}
           
         { isUser && (<> <li>    
            <NavLink to="/dashboard/profile"> <FaUser></FaUser> My Profile</NavLink>
          </li>
          <li>    
            <NavLink to="/dashboard/bookings"> <FaList></FaList> My Bookings</NavLink>
          </li>
          </>)}
            
          

          <div className="divider"></div>

          <li>    
            <NavLink to="/"> <FaHome></FaHome> Home</NavLink>
          </li>
          <li>    
            <NavLink to="/menu"> <FaSearch></FaSearch> Menu</NavLink>
          </li>
        
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
