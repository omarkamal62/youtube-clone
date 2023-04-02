import classes from "./Sidebar.module.css";
import SidebarRow from "./SidebarRow";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {
  ExpandMoreOutlined,
  History,
  OndemandVideo,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
} from "@material-ui/icons";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const menuExpansion = useSelector((state) => state.ui.menuExpansion);

  return (
    <div
      className={`${classes.sidebar} ${!menuExpansion ? classes.shrinked : ""}`}
    >
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
    </div>
  );
};

export default Sidebar;
