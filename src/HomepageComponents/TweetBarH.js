import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './TweetBarH.css';
import ImagePhoto from 'material-ui/svg-icons/image/photo';

const TweetBarH = () => {
  return (
    <div className = "h-tweet-bar">
    <Paper zDepth={1} className = "h-paper">
      <div className = "h-tweet-box">
        <Avatar
          className = "h-avatar-for-tweet"
          src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225611/6TY0EjQh_400x400_rqcbun.jpg"
          size = {40}
        />
        <TextField className = "h-tweet-space" hintText = "What's Happening?" fullWidth = {true} underlineShow = {false}/>
        <ImagePhoto className = "h-add-media" color = '#0084b4'/>
      </div>
      </Paper>
      </div>
  );
}

export default TweetBarH;
