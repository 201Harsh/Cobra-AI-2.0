"use client";
import React, { useEffect, useState } from "react";
import WebContainerPreview from "./WebContainerPreview";
import AxiosInstance from "@/config/Axios";
import { Slide, toast } from "react-toastify";

export default function EditorPage() {
  const [code, setCode] = useState(`
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
`);

  const GetCode = async () => {
    try {
      const res = await AxiosInstance.get("/websites/all");
      if (res.status === 200) {
        const Websites = res.data.Websites;
        setCode(Websites[0].Code);
      }
    } catch (error: any) {
      toast.error(error.respone.data.message, {
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
    GetCode();
  }, []);

  return (
    <div className="p-6 min-h-screen">
      <WebContainerPreview code={code} />
    </div>
  );
}
