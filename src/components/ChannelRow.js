import React from 'react';
import '../css/ChannelRow.css';
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({image, channel, subs, noOfVideos, description, verified}) => {
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow__logo" src={image} alt={channel} />
      <div className="ChannelRow__text">
        <h4> {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ChannelRow;