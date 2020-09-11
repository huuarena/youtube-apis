import axios from 'axios';
// import { USER_TOKEN } from './localStorage';
import { CONFIG } from '../config';

/**
 * Call API
 * @param {string} enpoint
 * @param {string} method
 * @param {object} data
 */
export const callYoutubeApi = async (endpoint, method = 'GET', data) => {
    try {
        const res = await axios({
            url: endpoint,
            method,
            data,
            headers: {
                // Authorization: USER_TOKEN.get(),
            },
            baseURL: CONFIG.YOUTUBE_API_BASE_URL,
        });

        console.log('callYoutubeApi payload :>> ', res.data);

        return {
            success: true,
            payload: res.data,
        };
    } catch (error) {
        let _error = {
            message: error.message,
        };

        if (error?.response) {
            _error = error.response;
        }
        if (error?.response?.data) {
            _error = error.response.data;
        }

        console.log('callYoutubeApi error :>> ', _error);

        return {
            success: false,
            error: _error,
        };
    }
};
