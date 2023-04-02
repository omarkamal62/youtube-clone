import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import classes from "./ChannelRow.module.css";

import { Avatar } from "@material-ui/core";

const ChannelRow = ({
  image,
  channel,
  subs,
  description,
  noOfVideos,
  verified,
}) => {
  return (
    <div className={classes.channelRow}>
      <Avatar className={classes.channelRow__logo} alt={channel} src={image} />
      <div className={classes.channelRow__text}>
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
