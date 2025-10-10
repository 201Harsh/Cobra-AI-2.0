import React from "react";

const BottomNavigation = ({
  activeTab,
  setActiveTab,
  navigationItems,
}: any) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:block lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-emerald-500/20">
        <div className="flex justify-around items-center py-3">
          {navigationItems.map((item: any) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-gray-400 hover:text-emerald-300"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
