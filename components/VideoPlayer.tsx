"use client";

import { useState, useEffect } from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface VdoCipherPlayerProps {
    videoId: string;
}

interface OtpResponse {
    otp: string;
    playbackInfo: string;
    error?: string;
    details?: string;
}

export default function VideoPlayer({ videoId }: VdoCipherPlayerProps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [playerData, setPlayerData] = useState<OtpResponse | null>(null);

    useEffect(() => {
        const fetchOtp = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch OTP from our backend API
                const response = await fetch(`/api/videos/${videoId}/otp`, {
                    method: "POST",
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to load video");
                }

                setPlayerData(data);
            } catch (err) {
                console.error("Error loading video:", err);
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (videoId) {
            fetchOtp();
        }
    }, [videoId]);

    if (loading) {
        return (
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                    <Loader2 className="animate-spin" size={32} />
                    <span>Loading secure player...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center border border-red-900/30">
                <div className="flex flex-col items-center gap-2 text-red-400">
                    <AlertCircle size={32} />
                    <span className="text-sm font-medium">Unable to load video</span>
                    <span className="text-xs text-red-500/70">{error}</span>
                </div>
            </div>
        );
    }

    if (!playerData?.otp || !playerData?.playbackInfo) {
        return (
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-slate-500">Video source unavailable</span>
            </div>
        );
    }

    return (
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl shadow-black/50 aspect-video">
            <iframe
                src={`https://player.vdocipher.com/v2/?otp=${playerData.otp}&playbackInfo=${playerData.playbackInfo}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="encrypted-media"
                allowFullScreen
                title="VdoCipher Secure Player"
            />
        </div>
    );
}
