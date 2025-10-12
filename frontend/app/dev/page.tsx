"use client";
import React, { useEffect, useState } from "react";
import VenomLab from "../Components/Dev/VenomLab";
import CreateLabs from "../Components/Dev/CreateLabs";
import DevHeader from "../Components/Dev/DevHeader";
import { Slide, toast } from "react-toastify";
import AxiosInstance from "@/config/Axios";

const Devpage = () => {
  const [venomLabs, setVenomLabs] = useState<any>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newLabName, setNewLabName] = useState("");

  // You can replace this with actual user data from your auth system
  const [currentUser, setcurrentUser] = useState<string>("Cobra AI");

  const handleGetAllLabs = async () => {
    try {
      const res = await AxiosInstance.get("/lab/all");

      if (res.status === 200) {
        setVenomLabs(res.data.VenomLabs);
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
    handleGetAllLabs();
  }, []);

  const handleCreateLab = async (environment: string) => {
    if (newLabName.trim() && environment) {
      try {
        const res = await AxiosInstance.post("/lab/create", {
          name: newLabName,
          environment: environment,
          creator: currentUser,
          status: "Active",
        });

        if (res.status === 200) {
          toast.success(res.data.message, {
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
          setcurrentUser(res.data.Lab.creator);
          handleGetAllLabs();
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
      setNewLabName("");
      setIsCreating(false);
    }
  };

  const handleDeleteLab = async (labId: string) => {
    try {
      const res = await AxiosInstance.delete(`/lab/delete/${labId}`);

      if (res.status === 200) {
        toast.success(res.data.message, {
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
        handleGetAllLabs();
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

  // Helper function to get environment display name
  const getEnvironmentName = (envId: string) => {
    const environments: { [key: string]: string } = {
      fullstack: "Full Stack Web Dev",
      python: "Python",
      "ai-ml": "AI/ML",
      mobile: "Mobile Development",
      "data-science": "Data Science",
      devops: "DevOps",
    };
    return environments[envId] || envId;
  };

  // Helper function to get environment icon
  const getEnvironmentIcon = (envId: string) => {
    const icons: { [key: string]: string } = {
      fullstack: "🌐",
      python: "🐍",
      "ai-ml": "🤖",
      mobile: "📱",
      "data-science": "📊",
      devops: "⚙️",
    };
    return icons[envId] || "🧪";
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-950 bg-gradient-to-br from-gray-950 via-red-500/20 to-rose-700/30 p-8">
        {/* Header Section */}
        <DevHeader />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Venom Labs Section */}
          <VenomLab
            venomLabs={venomLabs}
            setIsCreating={setIsCreating}
            getEnvironmentIcon={getEnvironmentIcon}
            getEnvironmentName={getEnvironmentName}
            handleDeleteLab={handleDeleteLab}
          />

          {/* Features Section */}
        </div>

        {/* Create Lab Modal */}
        <CreateLabs
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          newLabName={newLabName}
          setNewLabName={setNewLabName}
          handleCreateLab={handleCreateLab}
        />
      </div>
    </>
  );
};

export default Devpage;
