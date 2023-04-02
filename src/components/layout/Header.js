import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar/Avatar";

import classes from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube"
            className={classes.header__logo}
          />
        </Link>
      </div>

      <div className={classes.header__input}>
        <input
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className={classes.header__inputButton} />
        </Link>
      </div>

      <div className={classes.header__icons}>
        <VideoCallIcon className={classes.header__icon} />
        <AppsIcon className={classes.header__icon} />
        <NotificationsIcon className={classes.header__icon} />
        <Avatar
          alt="Omar Kamal"
          src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        />
      </div>
    </div>
  );
};

export default Header;
