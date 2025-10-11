"use client";
import AxiosInstance from "@/config/Axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const layout = ({ children }: any) => {
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  const Router = useRouter();
  const getUser = async () => {
    try {
      const res = await AxiosInstance.get("/users/me");

      if (res.status === 200) {
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("mode", res.data.user.mode);

        if (res.data.user.mode === "creator") {
          Router.push("/creator");
        } else {
          Router.push("/dev");
        }
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return <>{children}</>;
};

export default layout;
