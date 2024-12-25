import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Update = () => {
  const data = useLoaderData();
  // console.log(data);

  function handleSubmit(e) {
    e.preventDefault();

    const inititalData = new FormData(e.target);
    const updatedFormObjData = Object.fromEntries(inititalData.entries());
    updatedFormObjData.quantity = parseInt(updatedFormObjData.quantity);

    axios
      .put(
        `https://madchef-server-side.vercel.app/allfood/updatefood/${data._id}`,
        updatedFormObjData
      )
      .then((res) => {
        console.log(res);
        toast.success("Updated");
      });
  }

  return (
    <div>
      <div>
        <div className="hero bg-base-100 pb-20 pt-5">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-3">
                Update your food information
              </h1>
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
                    defaultValue={data.foodname}
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
                    defaultValue={data.photo}
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
                    defaultValue={data.category}
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
                    defaultValue={data.quantity}
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
                    defaultValue={data.price}
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
                    defaultValue={data.username}
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
                    defaultValue={data.useremail}
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
                    defaultValue={data.origin}
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
                    defaultValue={data.description}
                    cols="30"
                    rows="5"
                    className="border border-black/15 rounded-md p-3"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn hover:bg-blue-600 hover:border-none btn-neutral text-white w-full mt-2">
                    update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
