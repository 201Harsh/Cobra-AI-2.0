"use client";
import React, { useState } from "react";

const Devpage = () => {
  const [venomLabs, setVenomLabs] = useState<any>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newLabName, setNewLabName] = useState("");

  const handleCreateLab = () => {
    if (newLabName.trim()) {
      setVenomLabs([...venomLabs, { 
        id: Date.now(), 
        name: newLabName,
        members: 1,
        lastActive: "Just now"
      }]);
      setNewLabName("");
      setIsCreating(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-950 bg-gradient-to-br from-gray-950 via-red-500/20 to-rose-700/30 p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl">🧪</div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
                Venom Lab
              </h1>
              <p className="text-gray-300 text-sm mt-1">AI-Driven Developer Collaboration</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A real-time collaborative environment where developers, AI, and code fuse together
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
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
                        {lab.members} member{lab.members !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Last active: {lab.lastActive}
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 rounded-lg transition-colors">
                        Enter Lab
                      </button>
                      <button 
                        className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
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
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
                    <p className="text-red-400 font-semibold">Create New Lab</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Venom Lab Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-semibold text-white mb-2">Real-time Collaboration</h4>
                <p className="text-gray-400 text-sm">
                  Multiple developers working together with live code editing
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="font-semibold text-white mb-2">AI-Powered</h4>
                <p className="text-gray-400 text-sm">
                  Summon AI assistance directly in your coding sessions
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold text-white mb-2">Integrated Chat</h4>
                <p className="text-gray-400 text-sm">
                  Live group chat to communicate with your team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Create Lab Modal */}
        {isCreating && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl border border-red-500/30 p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-2">Launch a New Venom Lab</h3>
              <p className="text-gray-400 mb-6">Create a collaborative development space</p>
              
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
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleCreateLab}
                    disabled={!newLabName.trim()}
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)]"
                  >
                    Create Venom Lab
                  </button>
                  <button
                    onClick={() => setIsCreating(false)}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Devpage;