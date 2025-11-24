import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import SocialPage from "../../Shared/SocialPage/SocialPage";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { createUser, loginWithGoogle, updateUserProfile } = useAuth();
  const handleRegister = (data) => {
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_Url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;
        axios.post(image_API_Url, formData).then((res) => {
          console.log("after image", res);
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            name: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          updateUserProfile(userProfile)
            .then(() => navigate(location.state || "/") )
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };


  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="card bg-white w-full max-w-lg shrink-0 shadow-2xl"
    >
      <div className="card-body">
        <h1 className="text-2xl font-extrabold">Create an Account</h1>
        <h3>Register with ZapShift</h3>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input focus-within:outline-0 bg-white w-full"
            {...register("name")}
            placeholder="name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input focus-within:outline-0 bg-white w-full"
            placeholder="Email"
          />
          <label className="label">photo</label>
          <input
            type="file"
            {...register("photo")}
            className="file-input focus-within:outline-0 bg-white  w-full"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input focus-within:outline-0 bg-white w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Register</button>
        </fieldset>
        <h1>
          Already have any account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </h1>
        <SocialPage name='SignUp'/>
      </div>
    </form>
  );
};

export default Register;
