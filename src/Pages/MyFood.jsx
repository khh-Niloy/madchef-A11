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
            <figure>
              <img src={e.photo} alt="Shoes" />
              <Link to={`/updatefood/${e._id}`}>
                <TbEdit
                  className="bg-white border border-black/20 text-3xl cursor-pointer
                rounded-full p-1 -top-2 -right-2 absolute"
                ></TbEdit>
              </Link>
            </figure>
            <div key={e._id} className="card-body">
              <h2 className="card-title">{e.foodname}</h2>
              <p>Price: ${e.price}</p>
              <p>Origin: {e.origin}</p>
              <p className="line-clamp-1">{e.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFood;
