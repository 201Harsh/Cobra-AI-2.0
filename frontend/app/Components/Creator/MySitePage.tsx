import { useRouter } from "next/navigation";
import React from "react";

const MySitePage = ({ activeTab, setActiveTab, generatedSites }: any) => {
  const Router = useRouter();

  const handleView = async () => {
    Router.push(`/site/${generatedSites.map((site: any) => site._id)}`);
  };

  return (
    <>
      {activeTab === "sites" && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              My Generated Websites
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Manage and view all your AI-generated websites
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
            {generatedSites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generatedSites.map((site: any) => (
                  <div
                    key={site._id}
                    className="bg-gray-700/30 rounded-2xl p-6 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg text-emerald-400 font-h capitalize">
                        {site.Name}
                      </h3>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                        {site.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>Type: {site.SiteType}</p>
                      <p>
                        Created: {new Date(site.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex space-x-3 mt-4">
                      <button
                        onClick={handleView}
                        className="cursor-pointer flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                      >
                        View
                      </button>
                      <button className="cursor-pointer flex-1 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                        Deploy Website
                      </button>
                    </div>
                  </div>
                ))}
                {/* Add New Site Card */}
                <div className="bg-gray-700/20 rounded-2xl p-6 border border-dashed border-gray-600/50 flex flex-col items-center justify-center text-center hover:border-emerald-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">+</div>
                  <h3 className="font-bold text-lg text-white mb-2">
                    Create New Site
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Generate a new website with AI
                  </p>
                  <button
                    onClick={() => setActiveTab("create")}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Start Creating
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No Websites Yet
                </h3>
                <p className="text-gray-400 mb-6">
                  Create your first AI-generated website
                </p>
                <button
                  onClick={() => setActiveTab("create")}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Create Your First Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MySitePage;
