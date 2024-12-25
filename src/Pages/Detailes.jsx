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
      <div className="food-details-container w-[80%] mx-auto">
        <div className="flex items-center">
          <img
            src={foodData.photo}
            alt={foodData.foodname}
            className="food-image w-66 h-44 object-cover rounded-xl"
          />
          <div className="ml-5 flex flex-col gap-1">
            <h2 className="food-name text-4xl font-bold">
              {foodData.foodname}
            </h2>
            <p className="food-category text-md text-black">
              Category: {foodData.category}
            </p>
            <p className="food-origin text-md text-black">
              Origin: {foodData.origin}
            </p>
            <span className="price text-xl font-semibold text-[#FF2727]">
              Price: ${foodData.price}
            </span>
          </div>
        </div>
        <div>
          <p className="food-description mt-5 text-black">
            {foodData.description}
          </p>
          <div className="food-price mt-4 flex items-center justify-between">
            <span className="quantity text-md text-black">
              Quantity: {foodData.quantity}
            </span>
          </div>
          <span className="quantity text-md text-black">
            Purchase count: {foodData.purchase_count}
          </span>
          <div className="food-author mt-4 text-black">
            <p>Added by: {foodData.username}</p>
            <p>
              Email: {foodData.useremail}
            </p>
          </div>
          <h1 className="text-lg text-[#FF2727] font-semibold mt-3">
            {parseInt(foodData.quantity) == 0 &&
              "*You cannot buy this item as it is not available!"}
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
              className="btn btn-neutral w-full mt-5 hover:bg-[#FF2727] text-white border-none"
            >
              Purchase
            </button>
          )}
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
