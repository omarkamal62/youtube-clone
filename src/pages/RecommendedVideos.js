import classes from "./RecommendedVideos.module.css";
import VideoCard from "../components/cards/VideoCard";

const VIDEOS = [
  {
    title:
      "Rich Froning's Return To Individual Competition | FULL EVENT 2 AGOQ",
    views: "4K",
    timestamp: "7 hours ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJVPbGPB6Jpe15dPTeDm_0gMT5MEHvbRV9IAcxv1dg=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/ezp7f0put88/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsyX7ER2lwGOVVLj_0zp2qljnC5w",
    channel: "CrossFit Mayhem",
  },
  {
    title: "HWPO Team Crushes Quarterfinals",
    views: "4K",
    timestamp: "7 days ago",
    channelImage:
      "https://yt3.ggpht.com/St18x1L24VYeTyfG4-t_ZZ-5EP4-kKzSlz6P-Yva-XbrwpwEUdcETRDWg0OKPYq_tI53hs25ww=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/uqfQqwUPYAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByXA9fQq3LKfVvRmJGBEh1rJK9uA",
    channel: "Mat Fraser | HWPO",
  },
  {
    title: "Top 6 React Hook Mistakes Beginners Make",
    views: "388K",
    timestamp: "5 Months ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/GGo3MVBFr1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8pRSRPPVSn9wqDhC4ieUC9XA2OQ",
    channel: "Web Dev Simplified",
  },
  {
    title: "Learn useContext In 13 Minutes",
    views: "496K",
    timestamp: "2 years ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/5LrDIWkK_Bc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBggBmCI289zEA5s-TC1mP_3bfi-Q",
    channel: "Web Dev Simplified",
  },
  {
    title:
      "Rich Froning's Return To Individual Competition | FULL EVENT 2 AGOQ",
    views: "4K",
    timestamp: "7 hours ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJVPbGPB6Jpe15dPTeDm_0gMT5MEHvbRV9IAcxv1dg=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/ezp7f0put88/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsyX7ER2lwGOVVLj_0zp2qljnC5w",
    channel: "CrossFit Mayhem",
  },
  {
    title: "HWPO Team Crushes Quarterfinals",
    views: "4K",
    timestamp: "7 days ago",
    channelImage:
      "https://yt3.ggpht.com/St18x1L24VYeTyfG4-t_ZZ-5EP4-kKzSlz6P-Yva-XbrwpwEUdcETRDWg0OKPYq_tI53hs25ww=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/uqfQqwUPYAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByXA9fQq3LKfVvRmJGBEh1rJK9uA",
    channel: "Mat Fraser | HWPO",
  },
  {
    title: "Top 6 React Hook Mistakes Beginners Make",
    views: "388K",
    timestamp: "5 Months ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/GGo3MVBFr1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8pRSRPPVSn9wqDhC4ieUC9XA2OQ",
    channel: "Web Dev Simplified",
  },
  {
    title: "Learn useContext In 13 Minutes",
    views: "496K",
    timestamp: "2 years ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/5LrDIWkK_Bc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBggBmCI289zEA5s-TC1mP_3bfi-Q",
    channel: "Web Dev Simplified",
  },
  {
    title:
      "Rich Froning's Return To Individual Competition | FULL EVENT 2 AGOQ",
    views: "4K",
    timestamp: "7 hours ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJVPbGPB6Jpe15dPTeDm_0gMT5MEHvbRV9IAcxv1dg=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/ezp7f0put88/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsyX7ER2lwGOVVLj_0zp2qljnC5w",
    channel: "CrossFit Mayhem",
  },
  {
    title: "HWPO Team Crushes Quarterfinals",
    views: "4K",
    timestamp: "7 days ago",
    channelImage:
      "https://yt3.ggpht.com/St18x1L24VYeTyfG4-t_ZZ-5EP4-kKzSlz6P-Yva-XbrwpwEUdcETRDWg0OKPYq_tI53hs25ww=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/uqfQqwUPYAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByXA9fQq3LKfVvRmJGBEh1rJK9uA",
    channel: "Mat Fraser | HWPO",
  },
  {
    title: "Top 6 React Hook Mistakes Beginners Make",
    views: "388K",
    timestamp: "5 Months ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/GGo3MVBFr1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8pRSRPPVSn9wqDhC4ieUC9XA2OQ",
    channel: "Web Dev Simplified",
  },
  {
    title: "Learn useContext In 13 Minutes",
    views: "496K",
    timestamp: "2 years ago",
    channelImage:
      "https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj",
    image:
      "https://i.ytimg.com/vi/5LrDIWkK_Bc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBggBmCI289zEA5s-TC1mP_3bfi-Q",
    channel: "Web Dev Simplified",
  },
];

const RecommendedVideos = () => {
  return (
    <div className={classes.recommendedVideos}>
      <h2>Recommended</h2>
      <div className={classes.recommendedVideos__videos}>
        {VIDEOS.map((vid) => {
          return (
            <VideoCard
              title={vid.title}
              views={vid.views}
              timestamp={vid.timestamp}
              channelImage={vid.channelImage}
              image={vid.image}
              channel={vid.channel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedVideos;
