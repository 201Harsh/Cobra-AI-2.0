"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AutoRedirect = () => {
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      Router.push("/auto");
    } else {
      Router.push("/");
    }
  }, [Router]);

  return null;
};

export default AutoRedirect;
