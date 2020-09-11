import React, { Component } from 'react';
import {
    getVideosByChannelId,
    getVideosByVideoIds,
    getCommentsByVideoIds,
} from './apis/youtube';

import channel_videos from './db/channel_videos';
import videos from './db/videos';
import comments from './db/comments';

class App extends Component {
    _getVideos = async () => {
        const data = {
            channelId: 'UCI2OiZs5aVcyBUBVsgovzng',
        };
        const res = await getVideosByChannelId(data);
        console.log('getVideosByChannelId res :>> ', res);
        if (res.success) {
            let videoIds = [];
            res.payload.items.forEach((element) => {
                if (element.id?.videoId) {
                    videoIds.push(element.id.videoId);
                }
            });
            console.log('videoIds :>> ', videoIds);

            const _data = {
                videoIds: videoIds,
                part: 'snippet,contentDetails,statistics,status',
            };
            const _res = await getVideosByVideoIds(_data);
            console.log('getVideosByVideoIds res :>> ', _res);
        }
    };

    _getCommentsByVideoIds = async () => {
        const data = {
            videoId: 'bk-7487l1OQ',
        };
        const res = await getCommentsByVideoIds(data);
        console.log('getCommentsByVideoIds res :>> ', res);
        console.log('res :>> ', res);
    };

    componentDidMount() {
        console.log('channel_videos :>> ', channel_videos);
        console.log('videos :>> ', videos);
        console.log('comments :>> ', comments);

        // this._getVideos();
        // this._getCommentsByVideoIds();
    }

    render() {
        return <div></div>;
    }
}

export default App;
