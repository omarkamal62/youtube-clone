import { Avatar } from "@material-ui/core";
import classes from "./VideoCard.module.css";

const VideoCard = ({
  image,
  title,
  timestamp,
  views,
  channel,
  channelImage,
}) => {
  return (
    <div className={classes.videoCard}>
      <img className={classes.videoCard__thumbnail} src={image} alt="" />
      <div className={classes.videoCard__info}>
        <Avatar
          src={channelImage}
          className={classes.videoCard__avatar}
          alt={channel}
        />
        <div className={classes.videoCard__text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
