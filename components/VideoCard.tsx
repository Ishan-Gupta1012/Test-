"use client";

import Link from "next/link";
import { Video as VideoIcon, Play, Eye } from "lucide-react";

interface VideoCardProps {
    id: string;
    title: string;
    duration: string;
    views: number;
}

export default function VideoCard({ id, title, duration, views }: VideoCardProps) {
    return (
        <div
            className="group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
                background: '#1a1a2e',
                border: '1px solid #2d2d44',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2d2d44';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1e1e3f 0%, #2d2d44 100%)' }}>
                <VideoIcon className="text-purple-500 group-hover:text-purple-400 transition-colors" size={48} />

                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 text-white text-xs px-2 py-1 rounded" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
                    {duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors" style={{ color: '#e4e4e7' }}>
                    {title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#94a3b8' }}>
                    <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{views.toLocaleString()} views</span>
                    </div>
                </div>

                {/* Watch Now Button */}
                <Link href={`/player/${id}`}>
                    <button
                        className="w-full font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                        style={{
                            background: '#8b5cf6',
                            color: '#ffffff'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#7c3aed';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#8b5cf6';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <Play size={16} fill="currentColor" />
                        Watch Now
                    </button>
                </Link>
            </div>
        </div>
    );
}
