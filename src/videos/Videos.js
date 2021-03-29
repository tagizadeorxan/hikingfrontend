import React, { useEffect, useState } from 'react'
import './videos.css'

const Videos = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://hikings.herokuapp.com/api/data/hiking/videos').then(res => res.json()).then(videos => setVideos(videos))
    }, [videos])
    return (
        <div className="videos-frames">
            { videos.length ? videos.map((video, i) =>
                <iframe width="560" title={video.title} height="315" src={video.embed_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" />
            ) : null}
        </div>
    )
}

export default Videos