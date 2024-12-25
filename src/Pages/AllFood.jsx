import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import PageTitle from "../Components/PageTitle";

const AllFood = () => {
  const [allFood, setallFood] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://madchef-server-side.vercel.app/allfood?search=${searchText}`
      )
      .then((data) => {
        setallFood(data.data);
      });
  }, [searchText]);

  return (
    <div>
      <PageTitle
        image="https://img.freepik.com/free-photo/banner-delicious-tacos_23-2150831065.jpg?t=st=1735131997~exp=1735135597~hmac=0166f35354e53b1fd3c54b53cb8d567bfd16d6edce8ac5330978f877aa4e3711&w=1380"
        text="Welcome to the World of Flavorful Delights"
        subtext="Explore Our All-Time Favorite Dishes Handpicked to Satisfy Your Cravings"
      ></PageTitle>

      <div className="w-[40%] mx-auto mt-8 py-3">
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
          <div
            key={e._id}
            className="card card-compact bg-base-100 shadow-xl hover:scale-[1.03] duration-300"
          >
            <figure className="h-[10rem] drop-shadow-xl rounded-2xl relative">
              <p
                className="text-[9px] left-3
              bottom-3 drop-shadow-xl absolute bg-[#FF2727] text-white px-3 py-1 rounded-lg font-medium"
              >
                Price: ${e.price}
              </p>
              <img
                className="object-cover h-[10rem] w-full"
                src={e.photo}
                alt="Shoes"
              />
            </figure>
            <div key={e._id} className="p-4">
              <h2 className="card-title">{e.foodname}</h2>
              <p className="text-sm">Origin: {e.origin}</p>
              <p className="line-clamp-2 text-sm mt-1">{e.description}</p>
              <div className="card-actions justify-end">
                <Link className="w-full" to={`/allfood/foodDetailes/${e._id}`}>
                  <button className="btn hover:bg-[#FF2727] hover:border-none btn-neutral text-white w-full mt-2">
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
