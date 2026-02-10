"use client";

import VideoCard from "@/components/VideoCard";
import { mockVideos } from "@/lib/videos";
import { Video } from "lucide-react";

export default function VideosPage() {
    const totalViews = mockVideos.reduce((sum, v) => sum + v.views, 0);
    const avgViews = mockVideos.length > 0 ? Math.round(totalViews / mockVideos.length) : 0;

    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    My Videos
                </h1>
                <p className="text-slate-400">
                    Manage and organize your video content
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-400 text-sm mb-1">Total Videos</p>
                    <p className="text-3xl font-bold text-white">{mockVideos.length}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-400 text-sm mb-1">Total Views</p>
                    <p className="text-3xl font-bold text-white">
                        {totalViews.toLocaleString()}
                    </p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-400 text-sm mb-1">Avg. Views</p>
                    <p className="text-3xl font-bold text-white">
                        {avgViews.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Video Grid or Empty State */}
            {mockVideos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mockVideos.map((video) => (
                        <VideoCard
                            key={video.id}
                            id={video.id}
                            title={video.title}
                            duration={video.duration}
                            views={video.views}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-24 h-24 mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                        <Video className="text-slate-600" size={48} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        No videos yet
                    </h3>
                    <p className="text-slate-400 text-center max-w-md">
                        Start uploading videos to build your library and track analytics.
                    </p>
                </div>
            )}
        </div>
    );
}
