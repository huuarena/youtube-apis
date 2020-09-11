import { callYoutubeApi } from '../utils/youtubeApiCaller';
import { CONFIG } from '../config';

export const getVideosByChannelId = async (data) => {
    return await callYoutubeApi(
        `search?key=${CONFIG.YOUTUBE_API_KEY}&channelId=${
            data.channelId
        }&part=${data.part ? data.part : 'snippet'}&fields=${
            data.fields ? data.fields : '*'
        }&maxResults=${data.maxResults ? data.maxResults : '10'}${
            data.pageToken ? `&pageToken=${data.pageToken}` : ''
        }`
    );
};

export const getVideosByVideoIds = async (data) => {
    return await callYoutubeApi(
        `videos?key=${CONFIG.YOUTUBE_API_KEY}&id=${data.videoIds}&part=${
            data.part ? data.part : 'snippet'
        }&fields=${data.fields ? data.fields : '*'}&maxResults=${
            data.maxResults ? data.maxResults : '10'
        }${data.pageToken ? `&pageToken=${data.pageToken}` : ''}`
    );
};

export const getCommentsByVideoIds = async (data) => {
    return await callYoutubeApi(
        `commentThreads?key=${CONFIG.YOUTUBE_API_KEY}&videoId=${
            data.videoId
        }&part=${data.part ? data.part : 'snippet'}&textFormat=${
            data.textFormat ? data.textFormat : 'html'
        }&maxResults=${data.maxResults ? data.maxResults : '20'}${
            data.pageToken ? `&pageToken=${data.pageToken}` : ''
        }`
    );
};
