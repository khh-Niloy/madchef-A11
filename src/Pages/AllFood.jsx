import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const AllFood = () => {
  const [allFood, setallFood] = useState([]);
    const { user } = useContext(AuthContext);
  

  useEffect(() => {
    fetchAllFoodData();
  }, []);

  const fetchAllFoodData = () => {
    axios.get("http://localhost:3000/allfood").then((data) => {
      setallFood(data.data);
    });
  };

  // console.log(allFood)

  return (
    <div>

        <div>
            <h1></h1>
        </div>

      <div className="w-[80%] mx-auto py-20 grid grid-cols-4 gap-5">
        {allFood.map((e) => (
          <div key={e._id} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={e.photo} alt="Shoes" />
            </figure>
            <div key={e._id} className="card-body">
              <h2 className="card-title">{e.foodname}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/allfood/foodDetailes/${e._id}`}><button className="btn btn-primary">Buy Now</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
