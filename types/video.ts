export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    views: number;
    uploadDate: string;
    youtubeId: string;
}

export interface Analytics {
    views: number;
    avgPlayDuration: string;
    deviceTypes: {
        mobile: number;
        desktop: number;
        tablet: number;
    };
    totalWatchTime: string;
}
