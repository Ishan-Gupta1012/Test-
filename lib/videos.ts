import { Video, Analytics } from "@/types/video";

export const mockVideos: Video[] = [
    {
        id: "0bc11100710a4b0580cf57d889ae9899",
        title: "VdoCipher Demo Video",
        description: "Official VdoCipher demo video",
        thumbnail: "https://www.vdocipher.com/blog/wp-content/uploads/2023/10/vdocipher-logo.png",
        duration: "0:00",
        views: 0,
        uploadDate: "2024-02-10",
        youtubeId: "D74vLgMYOxM", // Keeping this as fallback or reference for now, though unused by secure player
    },
    {
        id: "2",
        title: "Video 2",
        description: "Second YouTube video in the playlist",
        thumbnail: "https://img.youtube.com/vi/M8ICGx4p0lA/maxresdefault.jpg",
        duration: "0:00",
        views: 0,
        uploadDate: "2024-02-10",
        youtubeId: "M8ICGx4p0lA",
    },
];

export const getVideoById = (id: string): Video | undefined => {
    return mockVideos.find((video) => video.id === id);
};

export const getMockAnalytics = (videoId: string): Analytics => {
    const video = getVideoById(videoId);
    return {
        views: video?.views || 0,
        avgPlayDuration: "0:00",
        deviceTypes: {
            mobile: 0,
            desktop: 0,
            tablet: 0,
        },
        totalWatchTime: "0 hours",
    };
};
