"use client";
import AxiosInstance from "@/config/Axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, Bounce, Flip } from "react-toastify";
import CobraAILoading from "../auto/CobraLoading";

const ProtectedRoute = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/");
      toast.error("Authentication failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      return;
    }

    const verifyUser = async () => {
      try {
        const res = await AxiosInstance.get("/users/me");

        if (res.status === 200) {
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("mode", res.data.user.mode);
        }
      } catch (error: any) {
        // Token invalid → clear storage and redirect
        localStorage.clear();
        Router.push("/");
        toast.error(error.response?.data?.error || "Authentication failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    verifyUser();
  }, [Router]);

  if (isLoading)
    return (
      <>
        <CobraAILoading />
      </>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
