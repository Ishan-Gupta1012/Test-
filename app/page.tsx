"use client";

import VideoCard from "@/components/VideoCard";
import { mockVideos } from "@/lib/videos";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Video Library
        </h1>
        <p className="text-slate-400">
          Browse and watch your video content
        </p>
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
            Your video library is empty. Upload your first video to get started with your streaming dashboard.
          </p>
        </div>
      )}
    </div>
  );
}
