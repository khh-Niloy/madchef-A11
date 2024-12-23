import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { TiDelete } from "react-icons/ti";
import moment from "moment";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [myorder, setmyorder] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://madchef-server-side.vercel.app/allorder/buyerfood/${user?.email}`
      )
      .then((data) => {
        setmyorder(data.data);
      });
  }, []);


  function handleDelete(_id){
    axios.delete(``)
  }

  return (
    <div>
      <div className="w-[80%] mx-auto py-20 grid grid-cols-4 gap-8">
        {myorder.map((e) => (
          <div
            key={e._id}
            className="relative card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={e.photo} alt="Shoes" />
              <TiDelete
                onClick={() => {
                  handleDelete(e._id);
                }}
                className="bg-white border border-black/20 text-3xl cursor-pointer
                rounded-full p-1 -top-2 -right-2 absolute"
              ></TiDelete>
            </figure>
            <div key={e._id} className="card-body">
              <h2 className="card-title">{e.foodname}</h2>
              <p>Price: ${e.price}</p>
              <p>
                Buying time:{" "}
                {moment(e.buyingdate).format("MMMM Do YYYY, h:mm:ss")}
              </p>
              <p className="line-clamp-1">{e.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
