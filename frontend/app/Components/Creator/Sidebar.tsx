import React from "react";

const Sidebar = ({ activeTab, setActiveTab, navigationItems }: any) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-20 bg-gray-800/50 backdrop-blur-xl border-r border-emerald-500/10">
        <div className="flex flex-col items-center py-6 space-y-8">
          {/* Navigation Items */}
          {navigationItems.map((item: any) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative group p-3 rounded-2xl transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-emerald-500/20 border border-emerald-500/30"
                  : "bg-gray-700/30 hover:bg-gray-700/50"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>

              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-gray-800 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-800"></div>
              </div>

              {/* Active Indicator */}
              {activeTab === item.id && (
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-emerald-400 rounded-l-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
