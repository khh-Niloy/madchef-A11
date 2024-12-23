import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContextProvider";

const Detailes = () => {
  const foodData = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function handlePurchase(_id) {
    if (user?.email === foodData?.useremail) {
      toast.error("You can not purchase!");
      return;
    }
    navigate(`/purchase/${_id}`);
  }

  return (
    <div className="px-16 pt-10 pb-20">
      <div className="food-details-container w-[50%] mx-auto">
        <div className="food-card bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={foodData.photo}
            alt={foodData.foodname}
            className="food-image w-full h-64 object-cover"
          />
          <div className="food-info p-4">
            <h2 className="food-name text-2xl font-bold">
              {foodData.foodname}
            </h2>
            <p className="food-category text-sm text-gray-500">
              {foodData.category}
            </p>
            <p className="food-origin text-sm text-gray-500">
              Origin: {foodData.origin}
            </p>
            <p className="food-description mt-2 text-gray-700">
              {foodData.description}
            </p>
            <div className="food-price mt-4 flex items-center justify-between">
              <span className="quantity text-lg text-gray-600">
                Quantity: {foodData.quantity}
              </span>
              <span className="price text-xl font-semibold text-green-600">
                ${foodData.price}
              </span>
            </div>
            <span className="quantity text-lg text-gray-600">
              Purchase count: {foodData.purchase_count}
            </span>
            <div className="food-author mt-4 text-gray-600">
              <p>Added by: {foodData.username}</p>
              <p>
                Email:{" "}
                <p
                  href={`mailto:${foodData.useremail}`}
                  className="text-blue-600"
                >
                  {foodData.useremail}
                </p>
              </p>
            </div>
            <h1 className="text-xl text-red-600 font-semibold">
              {parseInt(foodData.quantity) == 0 &&
                "You cannot buy this item as it is not available."}
            </h1>

            {parseInt(foodData.quantity) == 0 ? (
              <button disabled className="btn btn-neutral w-full mt-5">
                Purchase
              </button>
            ) : (
              <button
                onClick={() => {
                  handlePurchase(foodData._id);
                }}
                className="btn btn-neutral w-full mt-5"
              >
                Purchase
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailes;

{
  /* <Link to={`/purchase/${foodData._id}`}>
  <button className="btn btn-neutral w-full mt-5">Purchase</button>
</Link>; */
}
