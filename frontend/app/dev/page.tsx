"use client";
import React, { useState } from "react";
import VenomLab from "../Components/Dev/VenomLab";
import CreateLabs from "../Components/Dev/CreateLabs";
import DevHeader from "../Components/Dev/DevHeader";

const Devpage = () => {
  const [venomLabs, setVenomLabs] = useState<any>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newLabName, setNewLabName] = useState("");

  const handleCreateLab = () => {
    if (newLabName.trim()) {
      setVenomLabs([
        ...venomLabs,
        {
          id: Date.now(),
          name: newLabName,
          members: 1,
          lastActive: "Just now",
        },
      ]);
      setNewLabName("");
      setIsCreating(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-950 bg-gradient-to-br from-gray-950 via-red-500/20 to-rose-700/30 p-8">
        {/* Header Section */}
        <DevHeader />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/*Venom Labs Section */}
          <VenomLab venomLabs={venomLabs} setIsCreating={setIsCreating} />

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
