import React, { useState } from "react";

const SettingsPage = ({
  activeTab,
  setActiveTab,
  UserData,
  setUserData,
}: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(UserData);
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
    // Here you would typically make an API call to update the user data
  };

  const handleCancel = () => {
    setEditedData(UserData);
    setIsEditing(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const getUsagePercentage = () => {
    const used = 10 - UserData.siteGenToken; // Assuming 10 is the total
    return (used / 10) * 100;
  };

  const getRemainingSites = () => {
    return UserData.siteGenToken;
  };

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
            {/* Header with Edit Toggle */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Account Settings</h2>
              <div className="flex space-x-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Settings */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-gray-600/50 pb-2">
                  Profile Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.name}
                        onChange={(e) =>
                          setEditedData({ ...editedData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-700/30 rounded-xl border border-gray-600/50">
                        <span className="text-white">{UserData.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedData.email}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-700/30 rounded-xl border border-gray-600/50">
                        <span className="text-white">{UserData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mode
                    </label>
                    {isEditing ? (
                      <select
                        value={editedData.mode}
                        onChange={(e) =>
                          setEditedData({ ...editedData, mode: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-white"
                      >
                        <option value="creator">Creator</option>
                        <option value="developer">Developer</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    ) : (
                      <div className="px-4 py-3 bg-gray-700/30 rounded-xl border border-gray-600/50">
                        <span className="text-white capitalize">
                          {UserData.mode}
                        </span>
                      </div>
                    )}
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
                    <span className="text-sm font-medium text-gray-300 capitalize">
                      {UserData.plan} Plan
                    </span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Sites Remaining</span>
                      <span>{getRemainingSites()} / 10</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${getUsagePercentage()}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      {10 - getRemainingSites()} sites used •{" "}
                      {getRemainingSites()} remaining
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
                    Upgrade Plan
                  </button>
                </div>

                {/* Account Type */}
                <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    Account Type
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm capitalize">
                      {UserData.mode}
                    </span>
                    {isEditing && (
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        Editable
                      </span>
                    )}
                  </div>
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
                <div className="flex space-x-3 mb-3">
                  <div className="flex-1 relative">
                    <input
                      type={showApiKey ? "text" : "password"}
                      value={UserData.apiKey}
                      className="w-full px-4 py-3 bg-gray-600/30 rounded-lg border border-gray-500 text-white text-sm font-mono pr-24"
                      readOnly
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded text-xs transition-all duration-300"
                      >
                        {showApiKey ? "Hide" : "Show"}
                      </button>
                      <button
                        onClick={() => copyToClipboard(UserData.apiKey)}
                        className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-xs transition-all duration-300"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Keep your API key secure and don't share it with others.
                </p>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="mt-8 pt-8 border-t border-red-500/20">
              <h3 className="text-lg font-bold mb-4 text-red-400">
                Danger Zone
              </h3>
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-red-300 mb-1">
                      Delete Account
                    </h4>
                    <p className="text-xs text-red-400/70">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-medium">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPage;
