import React, { useState } from "react";

const CreateLabs = ({
  isCreating,
  setIsCreating,
  newLabName,
  setNewLabName,
  handleCreateLab,
}: any) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("");

  const codingEnvironments = [
    { id: "web-development", name: "Full Stack Web Development", available: true },
    { id: "python", name: "Python", available: true },
    { id: "ai-ml", name: "AI/ML", available: false },
    { id: "mobile-development", name: "Mobile Development", available: false },
    { id: "data-science", name: "Data Science", available: false },
    { id: "devops", name: "DevOps", available: false },
  ];

  const handleEnvironmentSelect = (envId: string) => {
    const env = codingEnvironments.find((e) => e.id === envId);
    if (env?.available) {
      setSelectedEnvironment(envId);
    }
  };

  const handleCreate = () => {
    if (newLabName.trim() && selectedEnvironment) {
      handleCreateLab(selectedEnvironment);
    }
  };

  return (
    <>
      {isCreating && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl border border-red-500/30 p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-2">
              Launch a New Venom Lab
            </h3>
            <p className="text-gray-400 mb-6">
              Create a collaborative development space
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Lab Name
                </label>
                <input
                  type="text"
                  value={newLabName}
                  onChange={(e) => setNewLabName(e.target.value)}
                  placeholder="e.g., Quantum Circuit"
                  className="w-full bg-gray-800 border border-red-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,80,0.3)] transition-all"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Coding Environment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {codingEnvironments.map((env) => (
                    <button
                      key={env.id}
                      onClick={() => handleEnvironmentSelect(env.id)}
                      disabled={!env.available}
                      className={`p-3 rounded-xl border transition-all duration-200 text-sm font-medium cursor-pointer ${
                        selectedEnvironment === env.id
                          ? "border-red-500 bg-emerald-500/10 text-red-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                          : env.available
                          ? "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                          : "border-gray-700 bg-gray-900/30 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-medium">{env.name}</div>
                        {!env.available && (
                          <div className="text-xs text-amber-500 mt-1">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCreate}
                  disabled={!newLabName.trim() || !selectedEnvironment}
                  className="flex-1 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] cursor-pointer"
                >
                  Create Venom Lab
                </button>
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setSelectedEnvironment("");
                  }}
                  className="cursor-pointer px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateLabs;
