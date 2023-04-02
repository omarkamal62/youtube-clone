import { TuneOutlined } from "@material-ui/icons";
import classes from "./Search.module.css";

import ChannelRow from "../components/cards/ChannelRow";
import VideoRow from "../components/cards/VideoRow";

const SearchPage = () => {
  return (
    <div className={classes.searchPage}>
      <div className={classes.searchPage__filter}>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        timestamp="4 days ago"
        channel="Clever Programmer"
        description="Do you want a FREE one hour training... check this video"
        title="🔴 How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
        image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu0r-EqfUxlC_pHiQrqBqH-6PnjQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        timestamp="4 days ago"
        channel="Clever Programmer"
        description="Do you want a FREE one hour training... check this video"
        title="🔴 How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
        image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu0r-EqfUxlC_pHiQrqBqH-6PnjQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        timestamp="4 days ago"
        channel="Clever Programmer"
        description="Do you want a FREE one hour training... check this video"
        title="🔴 How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
        image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu0r-EqfUxlC_pHiQrqBqH-6PnjQ"
      />
    </div>
  );
};

export default SearchPage;
