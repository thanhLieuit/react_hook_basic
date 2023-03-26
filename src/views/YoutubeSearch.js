import './Blog.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
const YoutubeSearch = () => {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {

    }, [])

    const hanldeSearchYT = async () => {
        // let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part: 'snippet',
        //     maxResults: '20',
        //     key: 'AIzaSyCy74t7EzmFyNuV9XPHh95lJg-TI4Q1LRM',
        //     type: 'video',
        //     q: query
        // });
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyCy74t7EzmFyNuV9XPHh95lJg-TI4Q1LRM',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {

                raw.map(item => {
                    let object = [];
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.time = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;
                    result.push(object)
                })
            }
            setVideos(result);
        }
        console.log('>>> check res: ', res);
    }

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder='Search'
                    value={query}
                    onChange={(event) => setQuery(event.target.value)} />
                <button type="button" onClick={hanldeSearchYT}>Search</button>
            </div>
            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='ifram-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                                </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>
                                <div className='created-at'>
                                    created At: {moment(item.time).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )
}
export default YoutubeSearch;