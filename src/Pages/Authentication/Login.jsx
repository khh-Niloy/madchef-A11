import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isClicked, setisClicked] = useState(false);
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        toast.success("Welcome back!");
        location.state ? navigate(`${location.state}`) : navigate(`/`);
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  }

  function handleGoogle() {
    googleSignIn()
      .then((res) => {
        toast.success("Welcome back!");
        location.state ? navigate(`${location.state}`) : navigate(`/`);
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  }

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={isClicked ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <FaEye
                  onClick={() => {
                    setisClicked(!isClicked);
                  }}
                  className="absolute top-14 right-5"
                ></FaEye>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <Link to="/register">
                  <button className="btn btn-primary mt-5">Register</button>
                </Link>
              </div>
            </form>
            <button
              onClick={() => {
                handleGoogle();
              }}
              className="btn btn-neutral"
            >
              Google
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
