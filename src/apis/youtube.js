import { callYoutubeApi } from '../utils/youtubeApiCaller';
import { CONFIG } from '../config';

export const getVideosByChannelId = async (data) => {
    return await callYoutubeApi(
        `search?key=${CONFIG.YOUTUBE_API_KEY}&channelId=${data.channelId}&part=${data.part}`
    );
};
