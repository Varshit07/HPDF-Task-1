import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import './TweetH.css';
import Reply from 'react-icons/lib/fa/comment';
import Retweet from 'react-icons/lib/fa/retweet';
import Like from 'react-icons/lib/fa/heart';
import DirectMessage from 'react-icons/lib/fa/inbox';
const TweetH = () => {
  return(
    <div className = "h-twitter-field">
    <Paper zDepth={1} className = "h-paper">
    <div className = "h-tweet">
    <span className = "h-tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514226146/Cyio02cd_400x400_sbww5p.jpg"
    size = {60}
    />
    </span>
    <span className = "h-tweet-author-name">Tanmai Gopal</span>
    <span className = "h-tweet-author-username">@tamnaigo</span>
    <span className = "h-interpunct"> · </span>
    <span className = "h-time-since-tweet"> 3m </span>
    <br />
    <br />
    <span className = "h-tweet-text">Just In : Hasura is making to Fortune 500 India this year</span>
    <br />
    <br />
    <span className = "reply-icon h-icons"><Reply /> 299</span>
    <span className = "retweet-icon h-icons"><Retweet /> 1.5K </span>
    <span className = "like-icon h-icons"><Like /> 1.1K</span>
    <span className = "dm-icon h-icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    <Paper zDepth = {1} className = "h-paper">
    <div className = "h-tweet">
    <span className = "h-tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225611/6TY0EjQh_400x400_rqcbun.jpg"
    size = {60}
    />
    </span>
    <span className = "h-tweet-author-name">Varshit Shah</span>
    <span className = "h-tweet-author-username">@Varshit07</span>
    <span className = "h-interpunct"> · </span>
    <span className = "h-time-since-tweet"> 5m </span>
    <br />
    <br />
    <span className = "h-tweet-text">Disguise is always a self-portrait!! <span className = "hashtag">#illusion</span></span>
    <br />
    <br />
    <img className = "h-user-photo" src = "http://res.cloudinary.com/ddskvkjzs/image/upload/c_scale,h_350,q_100,w_465/v1513959620/Untitled-4_gabljd.jpg" alt = "user-upload" />
    <br />
    <br />
    <span className = "reply-icon h-icons"><Reply /> 2</span>
    <span className = "retweet-icon h-icons"><Retweet /> 10</span>
    <span className = "like-icon h-icons"><Like /> 11</span>
    <span className = "dm-icon h-icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    <Paper zDepth = {1} className = "h-paper">
    <div className = "h-tweet">
    <span className = "h-tweet-author-avatar">
    <Avatar
    src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514226727/dDbx42iu_400x400_t3vi8v.jpg"
    size = {60}
    />
    </span>
    <span className = "h-tweet-author-name">HackerEarth</span>
    <span className = "h-tweet-author-username">@HackerEarth</span>
    <span className = "h-interpunct"> · </span>
    <span className = "h-time-since-tweet"> 15m </span>
    <br />
    <br />
    <span className = "h-tweet-text">Eat, sleep, Hustle. Repeat <span className = "hashtag">#motivation</span></span>
    <br />
    <br />
    <br />
    <span className = "reply-icon h-icons"><Reply /> 30</span>
    <span className = "retweet-icon h-icons"><Retweet /> 40</span>
    <span className = "like-icon h-icons"><Like /> 90</span>
    <span className = "dm-icon h-icons"><DirectMessage /></span>
    <br />
    <br />
    </div>
    </Paper>
    </div>
  );
}

export default TweetH;
