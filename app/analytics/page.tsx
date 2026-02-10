import AnalyticsCard from "@/components/AnalyticsCard";
import { TrendingUp, Users, Clock, BarChart3, Globe, Smartphone } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Analytics Dashboard
                </h1>
                <p className="text-slate-400">
                    Track performance and viewer engagement metrics
                </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <AnalyticsCard
                    icon={Users}
                    label="Total Viewers"
                    value="45.2K"
                    subtitle="Last 30 days"
                />
                <AnalyticsCard
                    icon={TrendingUp}
                    label="Growth Rate"
                    value="+24.5%"
                    subtitle="vs previous month"
                />
                <AnalyticsCard
                    icon={Clock}
                    label="Watch Time"
                    value="12.4K hrs"
                    subtitle="Total hours watched"
                />
            </div>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <BarChart3 size={20} className="text-indigo-400" />
                        Engagement Metrics
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">Average View Duration</span>
                            <span className="text-white font-semibold">8:45</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">Completion Rate</span>
                            <span className="text-white font-semibold">67%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">Engagement Rate</span>
                            <span className="text-white font-semibold">82%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">Bounce Rate</span>
                            <span className="text-white font-semibold">12%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe size={20} className="text-indigo-400" />
                        Geographic Distribution
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">North America</span>
                                <span className="text-white font-medium">42%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "42%" }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Europe</span>
                                <span className="text-white font-medium">28%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "28%" }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Asia</span>
                                <span className="text-white font-medium">22%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "22%" }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Other</span>
                                <span className="text-white font-medium">8%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "8%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Device Analytics */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <Smartphone size={20} className="text-indigo-400" />
                    Device & Platform Analytics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-3 bg-indigo-600/20 rounded-full flex items-center justify-center">
                            <Smartphone className="text-indigo-400" size={40} />
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">45%</p>
                        <p className="text-slate-400 text-sm">Mobile</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-3 bg-indigo-600/20 rounded-full flex items-center justify-center">
                            <svg className="text-indigo-400" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">38%</p>
                        <p className="text-slate-400 text-sm">Desktop</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-3 bg-indigo-600/20 rounded-full flex items-center justify-center">
                            <svg className="text-indigo-400" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                            </svg>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">17%</p>
                        <p className="text-slate-400 text-sm">Tablet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
