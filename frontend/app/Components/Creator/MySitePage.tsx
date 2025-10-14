import React, { useState, useRef, useEffect } from "react";

const MySitePage = ({
  activeTab,
  setActiveTab,
  generatedSites,
  handleDeleteSite,
}: any) => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleView = async ({ id }: any) => {
    window.open(`/site/${id}`, "_blank");
  };

  const handleCustomize = (siteId: string) => {
    console.log("Customize site:", siteId);
    // Add your customize logic here
    setMenuOpen(null);
  };

  const handleEdit = (siteId: string) => {
    console.log("Edit site:", siteId);
    // Add your edit logic here
    setMenuOpen(null);
  };

  const handleDuplicate = (siteId: string) => {
    console.log("Duplicate site:", siteId);
    // Add your duplicate logic here
    setMenuOpen(null);
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
                    className="bg-gray-700/30 rounded-2xl p-6 border border-gray-600/50 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 relative"
                  >
                    {/* Menu Button */}
                    <div className="absolute top-5 right-4" ref={menuRef}>
                      <button
                        onClick={() =>
                          setMenuOpen(menuOpen === site._id ? null : site._id)
                        }
                        className="p-2 rounded-lg bg-gray-600/50 hover:bg-gray-500/50 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {menuOpen === site._id && (
                        <div className="absolute right-0 top-10 w-48 bg-gray-800/95 backdrop-blur-xl border border-emerald-500/20 rounded-xl shadow-lg py-2 z-50">
                          <button
                            onClick={() => handleCustomize(site._id)}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            Customize / Edit
                          </button>

                          <div className="border-t border-gray-600 my-1"></div>

                          <button
                            onClick={() => handleDeleteSite(site._id)}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg text-emerald-400 font-h capitalize">
                        {site.Name}
                      </h3>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full mr-8">
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
                        onClick={() => {
                          handleView({ id: site._id });
                        }}
                        className="cursor-pointer flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteSite(site._id);
                        }}
                        className="cursor-pointer flex-1 bg-red-700 hover:bg-red-600/70 text-gray-300 py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                      >
                        Delete
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
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm cursor-pointer"
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
