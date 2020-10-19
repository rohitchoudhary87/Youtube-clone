import React from 'react';
import '../css/VideoCard.css'
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
  return(
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={channel} />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channelImage} alt={channel} />
        <div className="videoCard__text">
          <h4> {title} </h4>
          <p> {channel} </p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;