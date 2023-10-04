import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        // get form value
        const name= form.get('name');
        const img= form.get('img');
        const email= form.get('email');
        const password= form.get('password');

        // create user
        createUser(email, password)
        .then()
        .catch()
    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-3xl mx-auto text-center px-24 py-10">
        <h2 className="text-4xl font-semibold text-[#403F3F]">
        Register Your Account
        </h2>
        <hr className="my-8" />
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
              Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">
              Photo URL
              </span>
            </label>
            <input
              name="img"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
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
            <label className="text-left mt-3" htmlFor="check" >
                <input type="checkbox" name="check" id="check" className="mr-2" />
                Accept {" "}
              <a href="#" className="text-rose-500">
                Terms and Conditions
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
        </form>
        <p className="mt-6">
          Already have an account?{" "}
          <Link className="text-rose-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
