"use client";

import { useState, useRef, useEffect } from "react";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Settings,
    Maximize,
    Volume2,
    VolumeX,
} from "lucide-react";
import { mockVideos } from "@/lib/videos";

export interface YouTubePlayerProps {
    videoId: string;
    onVideoEnd?: () => void;
}

export default function YouTubePlayer({ videoId, onVideoEnd }: YouTubePlayerProps) {
    const [playing, setPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentVideo = mockVideos.find(v => v.id === videoId);
    const currentIndex = mockVideos.findIndex(v => v.id === videoId);
    const hasNext = currentIndex < mockVideos.length - 1;
    const hasPrevious = currentIndex > 0;

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showControls) {
            timeout = setTimeout(() => setShowControls(false), 3000);
        }
        return () => clearTimeout(timeout);
    }, [showControls]);

    const handleNext = () => {
        if (hasNext) {
            window.location.href = `/player/${mockVideos[currentIndex + 1].id}`;
        }
    };

    const handlePrevious = () => {
        if (hasPrevious) {
            window.location.href = `/player/${mockVideos[currentIndex - 1].id}`;
        }
    };

    // Build YouTube embed URL with autoplay
    const youtubeUrl = `https://www.youtube.com/embed/${currentVideo?.youtubeId}?autoplay=0&controls=1&modestbranding=1&rel=0&enablejsapi=1`;

    return (
        <div
            ref={containerRef}
            className="relative bg-black rounded-xl overflow-hidden group"
            onMouseMove={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            {/* YouTube Iframe Player */}
            <div className="relative aspect-video bg-black">
                <iframe
                    ref={iframeRef}
                    src={youtubeUrl}
                    title={currentVideo?.title || "YouTube video player"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>

            {/* Custom Controls Overlay */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Previous */}
                        <button
                            onClick={handlePrevious}
                            disabled={!hasPrevious}
                            className="text-white p-2 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous video"
                        >
                            <SkipBack size={20} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={handleNext}
                            disabled={!hasNext}
                            className="text-white p-2 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next video"
                        >
                            <SkipForward size={20} />
                        </button>

                        <span className="text-white text-sm">
                            Video {currentIndex + 1} of {mockVideos.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">
                            Use YouTube player controls for playback
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
