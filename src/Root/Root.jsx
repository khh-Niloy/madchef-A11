import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (navigation?.state === "loading") {
      setisLoading(true);
    } else {
      setisLoading(false);
    }
  }, [navigation?.state]);

  return (
    <div>
      <Navbar></Navbar>

      {isLoading ? (
        <>
          <div className="w-full h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Root;
