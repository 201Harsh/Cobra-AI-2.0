import React from "react";

const CreateLabs = ({ isCreating, setIsCreating, newLabName, setNewLabName, handleCreateLab } : any) => {
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

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCreateLab}
                  disabled={!newLabName.trim()}
                  className="flex-1 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] cursor-pointer"
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
    </>
  );
};

export default CreateLabs;
