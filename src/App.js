import React, { Component } from 'react';
import { getVideosByChannelId } from './apis/youtube';

class App extends Component {
    _getVideos = async () => {
        const data = {
            channelId: 'UCI2OiZs5aVcyBUBVsgovzng',
            part: 'snippet',
        };
        const res = await getVideosByChannelId(data);
        console.log('getVideosByChannelId res :>> ', res);
    };

    componentDidMount() {
        console.log('before call api');
        this._getVideos();
        console.log('after call api');
    }

    render() {
        return <div></div>;
    }
}

export default App;
