import React from "react";

const SettingsPage = ({ activeTab, setActiveTab }: any) => {
  return (
    <>
      {activeTab === "settings" && (
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Manage your account and preferences
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Settings */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-gray-600/50 pb-2">
                  Profile Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all duration-300 text-white text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Plan & Usage */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-gray-600/50 pb-2">
                  Plan & Usage
                </h3>

                <div className="bg-gray-700/30 rounded-xl p-4 border border-emerald-500/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-300">
                      Creator Plan
                    </span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Sites Generated</span>
                      <span>2 / 10</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>

            {/* API Settings */}
            <div className="mt-8 pt-8 border-t border-gray-600/50">
              <h3 className="text-lg font-bold text-white mb-4">
                API Settings
              </h3>
              <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  API Key
                </label>
                <div className="flex space-x-3">
                  <input
                    type="password"
                    defaultValue="sk-••••••••••••••••••••••••"
                    className="flex-1 px-3 py-2 bg-gray-600/30 rounded-lg border border-gray-500 text-white text-sm"
                    readOnly
                  />
                  <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    Copy
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Keep your API key secure and don't share it with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPage;
