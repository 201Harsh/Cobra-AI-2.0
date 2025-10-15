"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AutoRedirect = ({ children }: any) => {
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      Router.push("/auto");
    }
  }, [Router]);

  return <>{children}</>;
};

export default AutoRedirect;
