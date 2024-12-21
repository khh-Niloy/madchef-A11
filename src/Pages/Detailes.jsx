import React from "react";
import { useLoaderData } from "react-router-dom";

const Detailes = () => {
  const foodData = useLoaderData();
//   console.log(foodData);

  return (
    <div>
      <div className="food-details-container w-[80%] mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
