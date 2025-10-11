"use client";
import React, { useEffect, useState } from "react";
import WebContainerPreview from "../WebContainerPreview";
import { toast, Zoom } from "react-toastify";
import AxiosInstance from "@/config/Axios";
import { useParams } from "next/navigation";

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

  const params = useParams();
  const id = params.id;

  const handleGetCode = async () => {
    try {
      const res = await AxiosInstance.get(`websites/g/${id}`);

      if (res.status === 200) {
        setCode(res.data.Website.Code);
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
        transition: Zoom,
      });
    }
  };

  useEffect(() => {
    handleGetCode();
  }, []);

  return (
    <div className="scrollbar-hide min-h-screen">
      <WebContainerPreview code={code} />
    </div>
  );
}
