import AxiosInstance from "@/config/Axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import LoadingScreen from "../auto/LoadingScreen";

const ProtectedRoute = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const Router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      Router.push("/");
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
  }, [Router, token]);

  if (isLoading)
    return (
      <>
        <LoadingScreen />
      </>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
