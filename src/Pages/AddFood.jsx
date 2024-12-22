import React, { useEffect } from "react";
import axios from "axios";

const AddFood = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const inititalData = new FormData(e.target);
    const formObjData = Object.fromEntries(inititalData.entries());
    // console.log(formObjData);

    axios
      .post(`https://madchef-server-side.vercel.app/addfood`, formObjData)
      .then((res) => {
        // console.log(res);
        e.target.reset();
      });
  }

  return (
    <div>
      <div className="hero bg-base-100 pb-20 pt-5">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Add Food</h1>
          </div>
          <div className="card bg-base-100 w-[80%] shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Food Name"
                  name="foodname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="url"
                  placeholder="Food Image"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Food Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add By</span>
                </label>

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="useremail"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Origin</span>
                </label>
                <input
                  type="text"
                  name="origin"
                  placeholder="Add By"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  className="border border-black/15 rounded-md"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
