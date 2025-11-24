import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hook/useAuth";
import SocialPage from "../../Shared/SocialPage/SocialPage";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const { loginUser } = useAuth();
  const handleLogin = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then(() => navigate(location.state || "/"))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="card bg-white w-full max-w-lg shrink-0 shadow-2xl"
    >
      <div className="card-body">
        <h1 className="text-2xl font-extrabold">Welcome Back!!!</h1>
        <h3>Login with ZapShift</h3>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input  focus-within:outline-0 bg-white w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="input focus-within:outline-0 bg-white w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Login</button>
        </fieldset>
        <h1>
          Don’t have any account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </h1>
        <SocialPage name="Login" />
      </div>
    </form>
  );
};

export default Login;
