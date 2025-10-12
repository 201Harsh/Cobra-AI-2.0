import React from "react";

const VenomLab = ({ venomLabs, setIsCreating }: any) => {
  return (
    <>
      {/* Your Venom Labs Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">
          Your Venom Labs
        </h2>

        {venomLabs.length === 0 ? (
          /* Empty State */
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-12 text-center">
            <div className="text-6xl mb-4">🧪</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Venom Labs yet
            </h3>
            <p className="text-gray-400 mb-6">
              Launch your first Lab and invite your team
            </p>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,80,0.5)] hover:scale-105 cursor-pointer"
            >
              Create Venom Lab
            </button>
          </div>
        ) : (
          /* Labs Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venomLabs.map((lab: any) => (
              <div
                key={lab.id}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6 hover:border-red-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🧪</span>
                    <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                      {lab.name}
                    </h3>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                    {lab.members} member{lab.members !== 1 ? "s" : ""}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Last active: {lab.lastActive}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 rounded-lg transition-colors cursor-pointer">
                    Enter Lab
                  </button>
                  <button
                    className="px-3 py-2 cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                    title="Dismantle Venom Lab"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Lab Card */}
            <div
              className="bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-dashed border-red-500/30 p-6 hover:border-red-500/50 transition-all duration-300 cursor-pointer group flex items-center justify-center min-h-[160px]"
              onClick={() => setIsCreating(true)}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <p className="text-red-400 font-semibold">Create New Lab</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VenomLab;
