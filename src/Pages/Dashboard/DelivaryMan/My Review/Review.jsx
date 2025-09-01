import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const Review = () => {

    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();
    
    useEffect(() => {
        fetch('https://parcel-management-server-sigma.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
    
                // Filter reviews after setting them
                const reviewMan = data.filter(man => man.deliveryManEmail === user.email);
                console.log(user);
                console.log(data);
                console.log(reviewMan);
            });
    }, [user.email]);



    return (
        <div>

<div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              
              {reviews.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="h-24 rounded-lg" src={user.photoURL} alt="" />
                  </td>
                  <td className="font-bold text-2xl">{user.displayName}</td>
                  <td className="font-bold text-2xl">{user.rating} star</td>
                  <td>{user.description}</td>
                
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
            
        </div>
    );
};

export default Review;