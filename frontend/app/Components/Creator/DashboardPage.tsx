import React from "react";

const DashboardPage = ({ activeTab, setActiveTab, generatedSites }: any) => {
  return (
    <>
      {activeTab === "dashboard" && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Welcome to your Cobra AI workspace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-white mb-2">
                {generatedSites.length}
              </div>
              <div className="text-sm text-gray-400">Websites Generated</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-sm text-gray-400">Sites Remaining</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-sm text-gray-400">Active Projects</div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab("create")}
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 text-left"
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold">Create New Website</div>
                <div className="text-sm opacity-80">Generate with AI</div>
              </button>

              <button
                onClick={() => setActiveTab("sites")}
                className="cursor-pointer bg-gray-700/50 hover:bg-gray-700/70 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 text-left border border-gray-600/50"
              >
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-bold">View My Sites</div>
                <div className="text-sm opacity-80">Manage websites</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
