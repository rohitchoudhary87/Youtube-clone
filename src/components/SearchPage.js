import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import '../css/SearchPage.css';
import INMartin from '../Images/INMartin.jpg';

const SearchPage = () => {
  return (
    <div className="SearchPage">
      <div className="SearchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow 
        image="https://upload.wikimedia.org/wikipedia/commons/3/3e/MTV_Logo_2010.png"
        channel="The MTV Official"
        verified
        subs="2M"
        noOfVideos={340}
        description="MTV is an American cable channel, launched on August 1, 1981. Based in New York City, it serves as the flagship property of the ViacomCBS Domestic Media Networks division of ViacomCBS, also headquartered in New York City. "
      />

      <hr />

      <VideoRow 
        views="58M"
        subs="13.8M"
        description="Martin Garrix has risen to global stardom in pop as well as electronic circles –and yet he’s far from being done. Dance music’s freshest talent has headlined festivals around the globe, founded a label and mentored other artists and won the #1 spot in DJ Mag’s Top 100 three times. "
        timestamp="1 year ago"
        channel="Martin Garrix"
        title="Martin Garrix || Bebe Rexha - In The Name Of Love ..."
        image= {INMartin}
      />
    </div>
  );
};

export default SearchPage;