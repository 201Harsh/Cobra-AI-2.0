"use client";
import React, { useState } from "react";
import VenomLab from "../Components/Dev/VenomLab";
import CreateLabs from "../Components/Dev/CreateLabs";
import DevHeader from "../Components/Dev/DevHeader";

const Devpage = () => {
  const [venomLabs, setVenomLabs] = useState<any>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newLabName, setNewLabName] = useState("");

  // You can replace this with actual user data from your auth system
  const [currentUser] = useState({
    name: "Alex Developer", // This would come from your user context/auth
  });

  const handleCreateLab = (environment: string) => {
    if (newLabName.trim() && environment) {
      setVenomLabs([
        ...venomLabs,
        {
          id: Date.now(),
          name: newLabName,
          members: 1,
          lastActive: "Just now",
          environment: environment,
          environmentName: getEnvironmentName(environment),
          creator: {
            name: currentUser.name,
          },
          createdAt: new Date().toLocaleDateString(),
        },
      ]);
      setNewLabName("");
      setIsCreating(false);
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
