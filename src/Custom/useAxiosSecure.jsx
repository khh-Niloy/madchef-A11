import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const axiosInstance = axios.create({
  baseURL: "https://madchef-server-side.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useContext(AuthContext);

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
