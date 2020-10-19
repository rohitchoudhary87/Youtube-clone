import React from 'react';
import VideoCard from './VideoCard';
import '../css/Main.css';
import DiljitDosanjhImage from '../Images/Poster_3.PNG';
import DiljitDosanjhAvatar from '../Images/DiljitDosanjhAvatar.jpg';
import ScareLImage from '../Images/ScareLImage.jpg';
import MartinGarrixLogo from '../Images/MartinGarrixLogo.jpg';
import silence from '../Images/silence.jpg';
import silenceLogo from '../Images/silenceLogo.jpg';
import unbox from '../Images/unbox.jpg';
import unboxAvatar from '../Images/unboxAvatar.jpg';
import MB from '../Images/MB.jpg';
import MBLogo from '../Images/MBLogo.jpg';
import GO from '../Images/GO.jpg';
import GOLogo from '../Images/GOLogo.png';

const Main = () => {
  return(
    <div className="main">
      <div className="main__videos">
         <VideoCard 
          title="Clash || Diljit Dosanjh"
          views="5M views"
          timestamp="2 days ago"
          channel="Diljit Dosanjh"
          image= {DiljitDosanjhImage}
          channelImage= {DiljitDosanjhAvatar}
        />
        <VideoCard 
          title="Martin Garrix || Dua Lipa - Scared To Be Lonely (Official Video) "
          views="586M views"
          timestamp="3 years ago"
          channel="Martin Garrix"
          image= {ScareLImage}
          channelImage= {MartinGarrixLogo}
        />
        <VideoCard 
          title="Marshmello ft. Khalid - Silence (Official Lyric Video)"
          views="420M views"
          timestamp="3 years ago"
          channel="Marshmello"
          image= {silence}
          channelImage= {silenceLogo}
        />
        <VideoCard 
          title="The Sony WF-1000XM3 Just Changed The Game"
          views="5M views"
          timestamp="1 years ago"
          channel="Unbox Therepy"
          image= {unbox}
          channelImage= {unboxAvatar}
        />
        <VideoCard 
          title="LG Wing: The Swiveling Smartphone!"
          views="3M views"
          timestamp="2 days ago"
          channel="marques brownlee"
          image= {MB}
          channelImage= {MBLogo}
        />
        <VideoCard 
          title="GoPro: Introducing HERO9 Black — More Everything"
          views="4M views"
          timestamp="5 days ago"
          channel="Go Pro"
          image= {GO}
          channelImage= {GOLogo}
        />
      </div>
    </div>
  );
};

export default Main;