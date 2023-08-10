import React from 'react';

const VideosForMales = () => {
    return (
        <div>
            <h1>Videos for Males</h1>
            <div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_1"
                    title="Video 1"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Add more embedded videos as needed */}
        </div>
    );
};

export default VideosForMales;