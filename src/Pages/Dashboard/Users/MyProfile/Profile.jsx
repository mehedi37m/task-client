import useAuth from "../../../../hooks/useAuth";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosLocal from "../../../../hooks/useAxiosLocal";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { user, updateProfilePhoto } = useAuth();

  const axiosLocal = useAxiosLocal();

  const handleSubmit = async (data) => {
    // console.table(data);
    // image upload to imgbb and then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosLocal.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to server
      const photo = {
        photoURL: res.data.data.display_url,
      };
      updateProfilePhoto(photo)
        .then((result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} successfully updated`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .then((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
            src={user.photoURL}
            alt="Shoes"
            className="rounded-full h-64 w-64"
          />
        </figure>

        <div className="card-body items-center text-center">
          <p className="font-bold">change Profile pic</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full my-6">
              <input
                name="photo"
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <button className="btn btn-secondary">
              Update {" "}
            </button>
          </form>
        </div>
      </div>
      <div className=" text-center">
        <h2 className="card-title">
          <span className="font-bold ">Name </span>: {user.displayName}
        </h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
