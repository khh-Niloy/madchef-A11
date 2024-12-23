import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, profileInfo, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [isClicked, setisClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const hasUppercase = /(?=.*[A-Z])/;
    const hasLowercase = /(?=.*[a-z])/;
    const isAtLeast6Chars = /.{6,}/;

    if (!hasUppercase.test(password)) {
      seterror("at least one uppercase letter");
      return;
    }

    if (!hasLowercase.test(password)) {
      seterror("at least one lowercase letter");
      return;
    }

    if (!isAtLeast6Chars.test(password)) {
      seterror("at least 6 characters long");
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    createUser(email, password)
      .then((res) => {
        profileInfo(profile);
        toast.success("Account Created!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  }

  function handleGoogle() {
    googleSignIn()
      .then((res) => {
        toast.success("Welcome back!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
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
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <FaEye
                  onClick={() => {
                    setisClicked(!isClicked);
                  }}
                  className="absolute top-14 right-5"
                ></FaEye>
              </div>
              <p>{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
                <button
                  onClick={() => {
                    handleGoogle();
                  }}
                  className="btn btn-neutral"
                >
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
