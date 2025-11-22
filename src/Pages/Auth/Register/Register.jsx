import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hook/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { createUser, loginWithGoogle, updateUserProfile } = useAuth();
  const handleRegister = (data) => {
    console.log(data);
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_Url = `"https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }"`;
        axios.post(image_API_Url, formData).then((res) => {
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then()
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => console.log(result))
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
        <button
          onClick={handleGoogle}
          className="btn bg-white text-black border-0 shadow"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </form>
  );
};

export default Register;
