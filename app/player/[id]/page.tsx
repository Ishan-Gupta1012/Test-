"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import YouTubePlayer from "@/components/VideoPlayer";
import AnalyticsCard from "@/components/AnalyticsCard";
import { getVideoById, getMockAnalytics } from "@/lib/videos";
import { Eye, Clock, Smartphone, TrendingUp } from "lucide-react";

interface PlayerPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function PlayerPage({ params }: PlayerPageProps) {
    const [id, setId] = useState<string>("");
    const [video, setVideo] = useState<any>(null);
    const [analytics, setAnalytics] = useState<any>(null);

    useEffect(() => {
        params.then((p) => {
            setId(p.id);
            const v = getVideoById(p.id);
            if (!v) {
                notFound();
            }
            setVideo(v);
            setAnalytics(getMockAnalytics(p.id));
        });
    }, [params]);

    if (!video || !analytics) {
        return (
            <div className="p-6 lg:p-8 flex items-center justify-center min-h-screen">
                <div className="text-purple-400 text-lg">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Video Player */}
            <YouTubePlayer videoId={video.id} />

            {/* Video Info */}
            <div className="mt-4">
                <h1 className="text-2xl font-bold mb-2" style={{ color: '#e4e4e7' }}>
                    {video.title}
                </h1>
                <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
                    {video.views.toLocaleString()} views •{" "}
                    {new Date(video.uploadDate).toLocaleDateString()}
                </p>
            </div>

            {/* Video Description */}
            <div
                className="mt-4 rounded-xl p-6"
                style={{ background: '#1a1a2e', border: '1px solid #2d2d44' }}
            >
                <h2 className="text-lg font-semibold mb-2" style={{ color: '#e4e4e7' }}>
                    Description
                </h2>
                <p className="leading-relaxed" style={{ color: '#94a3b8' }}>
                    {video.description}
                </p>
            </div>

            {/* Analytics Section */}
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4" style={{ color: '#e4e4e7' }}>
                    Analytics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnalyticsCard
                        icon={Eye}
                        label="Total Views"
                        value={analytics.views.toLocaleString()}
                        subtitle="Lifetime views"
                    />

                    <AnalyticsCard
                        icon={Clock}
                        label="Avg. Play Duration"
                        value={analytics.avgPlayDuration}
                        subtitle="Per viewer"
                    />

                    <AnalyticsCard
                        icon={TrendingUp}
                        label="Watch Time"
                        value={analytics.totalWatchTime}
                        subtitle="Total hours watched"
                    />

                    <AnalyticsCard
                        icon={Smartphone}
                        label="Top Device"
                        value={`${analytics.deviceTypes.mobile}%`}
                        subtitle="Mobile viewers"
                    />
                </div>

                {/* Device Type Breakdown */}
                <div
                    className="mt-6 rounded-xl p-6"
                    style={{ background: '#1a1a2e', border: '1px solid #2d2d44' }}
                >
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#e4e4e7' }}>
                        Device Type Distribution
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span style={{ color: '#94a3b8' }}>Mobile</span>
                                <span className="font-medium" style={{ color: '#e4e4e7' }}>
                                    {analytics.deviceTypes.mobile}%
                                </span>
                            </div>
                            <div
                                className="w-full rounded-full h-2"
                                style={{ background: '#2d2d44' }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-500"
                                    style={{
                                        width: `${analytics.deviceTypes.mobile}%`,
                                        background: '#8b5cf6',
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span style={{ color: '#94a3b8' }}>Desktop</span>
                                <span className="font-medium" style={{ color: '#e4e4e7' }}>
                                    {analytics.deviceTypes.desktop}%
                                </span>
                            </div>
                            <div
                                className="w-full rounded-full h-2"
                                style={{ background: '#2d2d44' }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-500"
                                    style={{
                                        width: `${analytics.deviceTypes.desktop}%`,
                                        background: '#8b5cf6',
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span style={{ color: '#94a3b8' }}>Tablet</span>
                                <span className="font-medium" style={{ color: '#e4e4e7' }}>
                                    {analytics.deviceTypes.tablet}%
                                </span>
                            </div>
                            <div
                                className="w-full rounded-full h-2"
                                style={{ background: '#2d2d44' }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-500"
                                    style={{
                                        width: `${analytics.deviceTypes.tablet}%`,
                                        background: '#8b5cf6',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
