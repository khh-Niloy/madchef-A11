import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Custom/useAxiosSecure";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [myfood, setmyfood] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = () => {
    /* axios
      .get(
        `https://madchef-server-side.vercel.app/allfood/adminfood/${user?.email}`
      )
      .then((data) => {
        setmyfood(data.data);
      }); */
    axiosSecure.get(`/allfood/adminfood/${user?.email}`).then((data) => {
      setmyfood(data.data);
    });
  };

  return (
    <div>
      <div className="w-[80%] mx-auto py-20 grid grid-cols-4 gap-8">
        {myfood.map((e) => (
          <div
            key={e._id}
            className="relative card card-compact bg-base-100 shadow-xl"
          >
            <figure className="rounded-2xl shadow-xl h-[10rem]">
              <img
                className="object-cover w-full h-[10rem]"
                src={e.photo}
                alt="Shoes"
              />
              <Link to={`/updatefood/${e._id}`}>
                <TbEdit
                  className="bg-blue-600 border-[5px] hover:scale-[1.2] duration-300 border-white text-4xl cursor-pointer
                rounded-full p-1.5 text-white -top-2 -right-2 absolute"
                ></TbEdit>
              </Link>
            </figure>
            <div key={e._id} className="p-4">
              <h2 className="card-title">{e.foodname}</h2>
              <p className="text-sm">Price: ${e.price}</p>
              <p className="text-sm">Origin: {e.origin}</p>
              <p className="line-clamp-1 text-sm">{e.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFood;
