import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const AllFood = () => {
  const [allFood, setallFood] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allfood?search=${searchText}`)
      .then((data) => {
        setallFood(data.data);
      });
  }, [searchText]);

  return (
    <div>
      <div>
        <h1></h1>
      </div>

      <div className="w-[30%] mx-auto mt-8">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="w-[80%] mx-auto pb-20 pt-10 grid grid-cols-4 gap-5">
        {allFood.map((e) => (
          <div key={e._id} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={e.photo} alt="Shoes" />
            </figure>
            <div key={e._id} className="card-body">
              <h2 className="card-title">{e.foodname}</h2>
              <p>Price: ${e.price}</p>
              <p>Origin: {e.origin}</p>
              <p className="line-clamp-1">{e.description}</p>
              <div className="card-actions justify-end">
                <Link className="w-full" to={`/allfood/foodDetailes/${e._id}`}>
                  <button className="btn btn-neutral text-white w-full mt-2">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
