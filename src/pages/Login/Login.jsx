import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // get information
    const email = form.get('email');
    const password = form.get('password');

    // sign in user
    signInUser(email, password)
    .then(result => {
        console.log(result.user);
        // navigate after log in
        navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
        console.error(error);
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-3xl mx-auto text-center px-24 py-10">
        <h2 className="text-4xl font-semibold text-[#403F3F]">
          Login Your Account
        </h2>
        <hr className="my-8" />
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Email address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
        </form>
        <p className="mt-6">
          Don{"'"}t have an account?{" "}
          <Link className="text-rose-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
