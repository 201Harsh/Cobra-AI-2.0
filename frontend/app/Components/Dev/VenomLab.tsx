import React from "react";

const VenomLab = ({
  venomLabs,
  setIsCreating,
  getEnvironmentIcon,
  getEnvironmentName,
  handleDeleteLab,
}: any) => {
  return (
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
            Launch your first Lab and invite your team members to join!
          </p>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,80,0.5)] hover:scale-105"
          >
            Create Venom Lab
          </button>
        </div>
      ) : (
        /* Labs Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venomLabs.map((lab: any) => (
            <div
              key={lab._id}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6 hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="mx-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🧪</span>
                    <h3 className="uppercase font-bold font-h text-white group-hover:text-red-400 transition-colors">
                      {lab.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                  {lab.members} member{lab.members !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Creator Info */}
              {lab.creator && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                    {lab.creator.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300 font-medium">
                      {lab.creator}
                    </span>
                    <span className="text-xs text-red-300">Creator</span>
                  </div>
                </div>
              )}

              {/* Environment Display */}
              {lab.environment && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">
                    {getEnvironmentIcon(lab.environment)}
                  </span>
                  <span className="text-sm text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded">
                    {getEnvironmentName(lab.environment)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 text-sm">
                  Last active: {lab.lastActive}
                </p>
                {lab.createdAt && (
                  <p className="text-gray-500 text-xs">
                    Created: {lab.createdAt}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 rounded-lg transition-colors cursor-pointer">
                  Enter Lab
                </button>
                <button
                  onClick={() => {
                    handleDeleteLab(lab._id);
                  }}
                  className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors cursor-pointer"
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
  );
};

export default VenomLab;
