export const CONFIG = {
    ENV: process.env.REACT_APP_REACT_APP_ENV || 'development',
    PORT: process.env.REACT_APP_REACT_APP_PORT || 3000,
    HOST: process.env.REACT_APP_REACT_APP_HOST || 'http://localhost:3000',

    // youtube apis
    YOUTUBE_API_KEY:
        process.env.REACT_APP_YOUTUBE_API_KEY ||
        // 'AIzaSyDV8KcZPB1I6E9FvGe_IRQcuUTBsMfQFu4',
        'AIzaSyCwJB5xB14tWp3B14KOsUqVfcC30x3vfsE',
    YOUTUBE_API_BASE_URL:
        process.env.REACT_APP_YOUTUBE_API_BASE_URL ||
        'https://www.googleapis.com/youtube/v3/',
};
