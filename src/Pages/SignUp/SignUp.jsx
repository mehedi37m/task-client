import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const SignUp = () => {
 
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
   
    createUser(data.email, data.password)
  
      .then((result) => {
       console.log(result.user)
        updateUserProfile(data.name, data.photoURL, data.number,data.password)
          .then(() => {
            const userInfo ={
              name: data.name,
              email: data.email,
              password:data.password,
              role: 'user',
              phoneNumber: data.number,
              image: data.photoURL
            }
            fetch("https://parcel-management-server-sigma.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  Swal.fire({
                    title: "success",
                    text: "user added successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                  });
                }
                navigate('/')
              });
                              
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((errors) => {
        console.log(errors.message);
      });
  };

  console.log(watch("example"));

  return (
    <div>
      <Helmet>
        <title>Fast Food | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign UP Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 font-bold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("number", { required: true })}
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 font-bold">
                    Number is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-600 font-bold">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600 font-bold">
                    email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 font-bold">
                    Password required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 font-bold">
                    Password must be 6{" "}
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 font-bold">
                    Password less then 20{" "}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 font-bold">
                    Password uppercase , lowercase and number and special
                    keyword{" "}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign UP"
                />
              </div>
            </form>
            <p className="px-6 pb-2">
              <small>
              Already an Account? <Link to="/login" className="text-blue-500">Login</Link>
              </small>
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
