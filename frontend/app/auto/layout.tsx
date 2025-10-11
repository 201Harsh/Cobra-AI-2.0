"use client";
import AxiosInstance from "@/config/Axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import LoadingScreen from "./LoadingScreen";

const layout = () => {
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  const Router = useRouter();
  const getUser = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosInstance.get("/users/me");

      if (res.status === 200) {
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("mode", res.data.user.mode);

        if (res.data.user.mode === "creator") {
          Router.push("/creator");
        } else if (res.data.user.mode === "developer") {
          Router.push("/dev");
        } else {
          Router.push("/home");
        }
      }
    } catch (error: any) {
      Router.push("/");
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
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3500);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (IsLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }
};

export default layout;
