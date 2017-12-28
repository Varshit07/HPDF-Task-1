import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user';
import './FollowSuggestionH.css';
const FollowSuggestionH = () => {
  const iconStyle = {
    height: '18px',
    color: '#0084b4'
  }
  const buttonStyle = {
    marginLeft: '10px',
    borderRadius: '20px',
    backgroundColor: '#0084b4',
    height: '150%',
    position: 'relative',
    top: '2px',
    color: 'white'
  };
  return(
    <Paper zDepth = {1} className = "h-suggest-paper">
      <span className="paper-title">Who To Follow </span>  <span className = "h-status">· Refresh · View All</span>
      <br />
      <br />
      <br />
      <span className = "h-avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225878/BlpcUEvx_400x400_etk1dg.jpg" size = {60} />
      </span>
      <span className = "h-name"> Virat Kohli <ActionVerifiedUser style = {iconStyle}/> </span>
      <span className = "h-username"> @imVkohli</span>
      <span className = "h-follow-button">
      <FlatButton label="Follow" style = {buttonStyle} />
      </span>
      <br />
      <br />
      <span className = "h-avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225962/zDo-gAo0_400x400_kbndpe.jpg" size = {60} />
      </span>
      <span className = "h-name"> Elon Musk <ActionVerifiedUser style = {iconStyle}/> </span>
      <span className = "h-username"> @elonmusk</span>
      <FlatButton label="Follow" style = {buttonStyle} />
      <br />
      <br />
      <span className = "h-avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514226028/electrocat_400x400_mgodjd.png" size = {60} />
      </span>
      <span className = "h-name"> GitHub API <ActionVerifiedUser style = {iconStyle}/> </span>
      <span className = "h-username"> @GitHubAPI</span>
      <FlatButton label="Follow" style = {buttonStyle} />
      <br />
      <br />
      <br />
    </Paper>
  );
}

export default FollowSuggestionH;
