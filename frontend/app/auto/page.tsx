"use client";
import AxiosInstance from "@/config/Axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import CobraAILoading from "./CobraLoading";

const page = () => {
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
          setTimeout(() => {
            Router.push("/creator");
          }, 2000);
        } else if (res.data.user.mode === "developer") {
          setTimeout(() => {
            Router.push("/dev");
          }, 2500);
        } else {
          setTimeout(() => {
            Router.push("/home");
          }, 1000);
        }
      }
    } catch (error: any) {
      Router.push("/");
      toast.error(error.response.data.message || error.response.data.error, {
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
      localStorage.clear();
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
        <CobraAILoading />
      </>
    );
  }
};

export default page;
