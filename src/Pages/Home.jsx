import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  //   const [homeData, sethomeData] = useState([]);
  //   const navigation = useNavigation()
  //   console.log(navigation)

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   async function fetchData() {
  //     const { data } = await axios.get(
  //       `https://madchef-server-side.vercel.app/allfood`
  //     );
  //     sethomeData(data);
  //   }

  async function fetchFoodData() {
    const { data } = await axios.get(
      `https://madchef-server-side.vercel.app/allfood`
    );
    return data;
  }

  const {
    data: homeData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["homefood"],
    queryFn: fetchFoodData,
  });

  const filterData = homeData
    .sort(function (a, b) {
      return b.purchase_count - a.purchase_count;
    })
    .slice(0, 6);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="w-[80%] mx-auto pb-20 pt-8">
        <h1 className="text-center font-semibold text-2xl mb-10">
          Top 6 best-selling food items{" "}
          <span className="text-lg font-normal">(by purchase count)</span>
        </h1>

        <div className="grid grid-cols-3 gap-5 w-[80%] mx-auto">
          {filterData.map((e) => (
            <div
              key={e._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img src={e.photo} alt="Shoes" />
              </figure>
              <div key={e._id} className="card-body">
                <h2 className="card-title">{e.foodname}</h2>
                <p>Price: ${e.price}</p>
                <p>Total Purchased: {e.purchase_count}</p>
                <p className="line-clamp-1">{e.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    className="w-full"
                    to={`/allfood/foodDetailes/${e._id}`}
                  >
                    <button className="btn btn-neutral text-white w-full mt-2">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-20">
          <Link to={`/allfood`}>
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
