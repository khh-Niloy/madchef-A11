import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Purchase = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const [date, setdate] = useState(new Date(Date.now()));

  function handleSubmit(e) {
    e.preventDefault();

    const purchaseQuantity = e.target.purchaseQuantity.value;
    if (parseInt(purchaseQuantity) > parseInt(data.quantity)) {
      toast.error("Purchase failed! Quantity exceeds available stock.");
      return;
    }

    const inititalData = new FormData(e.target);
    const formObjData = Object.fromEntries(inititalData.entries());
    formObjData.foodid = data._id;
    // console.log(formObjData);

    axios
      .post(`https://madchef-server-side.vercel.app/addorder`, formObjData)
      .then((res) => {
        console.log(res);
        e.target.reset();
        toast.success("Order placed successfully!");
      });
  }

  return (
    <div>
      <div>
        <div className="hero bg-base-100 pb-20 pt-5">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Food Purchase</h1>
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
                    // value={data.foodname}
                    defaultValue={data.foodname}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Quantity ( {data.quantity} available)
                    </span>
                  </label>
                  <input
                    type="number"
                    name="purchaseQuantity"
                    placeholder="Purchase Quantity"
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
                    <span className="label-text">Buyer Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    name="buyername"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                    readOnly
                  />
                  <label className="label">
                    <span className="label-text">Buyer Email</span>
                  </label>
                  <input
                    type="email"
                    name="buyeremail"
                    defaultValue={user?.email}
                    placeholder="Email"
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Buying Date</span>
                  </label>
                  <input
                    type="text"
                    name="buyingdate"
                    value={date}
                    placeholder=""
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Purchase</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
