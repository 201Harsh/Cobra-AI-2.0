"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import AxiosInstance from "@/config/Axios";

interface VenomLab {
  _id: string;
  name: string;
  environment: string;
  creator: string;
  createdAt: string;
  status: string;
  members: string[];
}

const DevDash = ({ activeSection }: { activeSection: string }) => {
  const [labData, setLabData] = useState<VenomLab | null>(null);
  const [aiUsage, setAiUsage] = useState({
    totalHours: 0,
    monthlyUsage: 0,
    monthlyLimit: 100,
    cost: 0,
  });
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  const getEnvironmentIcon = (envId: string) => {
    const icons: { [key: string]: string } = {
      fullstack: "🌐",
      python: "🐍",
      "ai-ml": "🤖",
      mobile: "📱",
      "data-science": "📊",
      devops: "⚙️",
    };
    return icons[envId] || "🧪";
  };

  const getEnvironmentName = (envId: string) => {
    const environments: { [key: string]: string } = {
      fullstack: "Full Stack Web Dev",
      python: "Python",
      "ai-ml": "AI/ML",
      mobile: "Mobile Development",
      "data-science": "Data Science",
      devops: "DevOps",
    };
    return environments[envId] || envId;
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "inactive":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "suspended":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const GetCurrentVenomLab = async () => {
    try {
      const res = await AxiosInstance.get(`/lab/one/${id}`);
      if (res.status === 200) {
        console.log(res.data);
        setLabData(res.data.VenomLab);
        const createdDate = new Date(res.data.VenomLab.createdAt);

        // Total hours since lab creation
        const hoursSinceCreation = Math.floor(
          (Date.now() - createdDate.getTime()) / (1000 * 60 * 60)
        );

        // For example, let’s say each hour = 1 AI usage credit
        const usagePerHour = 1;

        // Limit total usage to 150 hours max
        const totalHours = Math.min(hoursSinceCreation * usagePerHour, 150);

        // Monthly usage = hours in current month since creation
        const monthlyUsage = Math.min(totalHours % 100, 75);

        // Update state
        setAiUsage({
          totalHours,
          monthlyUsage,
          monthlyLimit: 100,
          cost: monthlyUsage * 0.1,
        });
      }
    } catch (error) {
      console.error("Error fetching lab data:", error);
      // Set mock data for demonstration
      setLabData({
        _id: id as string,
        name: "Quantum Circuit Lab",
        environment: "fullstack",
        creator: "Cobra AI User",
        createdAt: new Date().toISOString(),
        status: "Active",
        members: ["User1", "User2", "User3"],
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      GetCurrentVenomLab();
    }
  }, [id]);

  if (activeSection !== "dashboard") return null;

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Lab Overview Card */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Lab Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lab Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Lab Name
              </label>
              <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-2xl">
                  {getEnvironmentIcon(labData?.environment || "")}
                </span>
                <span className="text-white font-semibold">
                  {labData?.name || "Unnamed Lab"}
                </span>
              </div>
            </div>

            {/* Creator */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Creator
              </label>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-white">
                  {labData?.creator || "Unknown"}
                </span>
              </div>
            </div>

            {/* Environment */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Environment
              </label>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-white">
                  {getEnvironmentName(labData?.environment || "")}
                </span>
              </div>
            </div>

            {/* Created At */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Created At
              </label>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-white">
                  {labData?.createdAt
                    ? new Date(labData.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Unknown"}
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Status
              </label>
              <div className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
                    labData?.status || ""
                  )}`}
                >
                  {labData?.status || "Unknown"}
                </span>
              </div>
            </div>

            {/* Members */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Team Members
              </label>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-white">
                  {labData?.members?.length || 1} members
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Usage & Billing */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            AI Usage & Billing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Usage Statistics */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Usage Statistics
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total AI Hours</span>
                  <span className="text-white font-semibold">
                    {aiUsage.totalHours}h
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Usage</span>
                    <span className="text-white font-semibold">
                      {aiUsage.monthlyUsage}h / {aiUsage.monthlyLimit}h
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          (aiUsage.monthlyUsage / aiUsage.monthlyLimit) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                  <span className="text-gray-400">Estimated Cost</span>
                  <span className="text-white font-semibold">
                    ₹{aiUsage.cost.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Billing Plan</h3>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-red-500/20">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-white font-semibold">Free Plan</h4>
                    <p className="text-gray-400 text-sm">Basic AI features</p>
                  </div>
                  <span className="text-green-400 font-semibold">₹0/month</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Hours</span>
                    <span className="text-white">100h/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Members</span>
                    <span className="text-white">Up to 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support</span>
                    <span className="text-white">Community</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.3)]">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Actions{" "}
            <span className="text-red-400">(Comming Soon...)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300 group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-white font-semibold mb-1">Invite Team</h3>
              <p className="text-gray-400 text-sm">Add members to your lab</p>
            </button>

            <button className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300 group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h3 className="text-white font-semibold mb-1">Lab Settings</h3>
              <p className="text-gray-400 text-sm">Configure environment</p>
            </button>

            <button className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300 group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-white font-semibold mb-1">Analytics</h3>
              <p className="text-gray-400 text-sm">View usage reports</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDash;
