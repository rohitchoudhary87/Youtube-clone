import React from 'react';
import '../css/VideoRow.css';

const VideoRow = ({channel, timestamp, subs, description, views, title, image}) => {
  return (
    <div className="VideoRow">
      <img src= {image} alt={channel} />
      <div className="VideoRow__text">
        <h3>{title}</h3>
        <p className="VideoRow__headline">
          {channel} . <span className="VideoRow__subs" ><span className="VideoRow__subCount">{subs} </span>Subscribers </span>. {views} views . {timestamp}
        </p>
        <p className="VideoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;