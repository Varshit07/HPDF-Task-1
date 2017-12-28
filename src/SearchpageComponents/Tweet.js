import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import './Tweet.css';
import Reply from 'react-icons/lib/fa/comment';
import Retweet from 'react-icons/lib/fa/retweet';
import Like from 'react-icons/lib/fa/heart';
import DirectMessage from 'react-icons/lib/fa/inbox';
const Tweet = () => {
  return(
    <div className = "twitter-field">
    <Paper zDepth={1} className = "paper">
    <div className = "tweet">
    <span className = "tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228438/Kz0Atmf3_400x400_lnuiwq.jpg"
    size = {60}
    />
    </span>
    <span className = "tweet-author-name">Business Line</span>
    <span className = "tweet-author-username">@businessline</span>
    <span className = "interpunct"> · </span>
    <span className = "time-since-tweet"> 10m </span>
    <br />
    <br />
    <span className = "tweet-text"><span className = "hashtag">#Aadhaar</span> has been far less beneficial than claimed to be: study by RBI arm</span>
    <br />
    <br />
    <img className = "user-photo" src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228507/DRdq1XmX4AEozaT_loikd0.jpg" alt = "user-upload" />
    <br />
    <br />
    <span className = "reply-icon icons"><Reply /> 29</span>
    <span className = "retweet-icon icons"><Retweet /> 105 </span>
    <span className = "like-icon icons"><Like /> 191</span>
    <span className = "dm-icon icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    <Paper zDepth = {1} className = "paper">
    <div className = "tweet">
    <span className = "tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228670/www.purehdwallpaper.com_400x400_zu0dvc.jpg"
    size = {60}
    />
    </span>
    <span className = "tweet-author-name">Savio Rodrigues</span>
    <span className = "tweet-author-username">@PrinceArihan</span>
    <span className = "interpunct"> · </span>
    <span className = "time-since-tweet"> Dec 20 </span>
    <br />
    <br />
    <span className = "tweet-text">Why is <span className = "hashtag">#Aadhaar</span> not linked to property deals? This seems very odd.</span>
    <br />
    <br />
    <br />
    <span className = "reply-icon icons"><Reply /> 20</span>
    <span className = "retweet-icon icons"><Retweet /> 20</span>
    <span className = "like-icon icons"><Like /> 52</span>
    <span className = "dm-icon icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    <Paper zDepth = {1} className = "paper">
    <div className = "tweet">
    <span className = "tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228714/GJsqkJRX_400x400_foeeiz.jpg"
    size = {60}
    />
    </span>
    <span className = "tweet-author-name">ET NOW</span>
    <span className = "tweet-author-username">@ETNOWlive</span>
    <span className = "interpunct"> · </span>
    <span className = "time-since-tweet">  Dec 15 </span>
    <br />
    <br />
    <span className = "tweet-text">Here is your new <span className = "hashtag">#Aadhaar</span> linking timetable. Save & Share! </span>
    <br />
    <br />
    <img className = "user-photo" src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228758/DRFXZ-ZUMAEHG2k_igaxyx.jpg" alt = "user-upload" />
    <br />
    <br />
    <span className = "reply-icon icons"><Reply /> 98</span>
    <span className = "retweet-icon icons"><Retweet /> 102</span>
    <span className = "like-icon icons"><Like /> 111</span>
    <span className = "dm-icon icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    </div>
  );
}

export default Tweet;
