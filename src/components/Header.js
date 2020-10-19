import React, { useState } from "react";
import "../css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_of_YouTube_%282005-2011%29.svg"
            alt="YouTube"
          />
        </Link>
      </div>

      <div className="header__search">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${term}`}>
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="" alt="RC" />
      </div>
    </div>
  );
};

export default Header;
