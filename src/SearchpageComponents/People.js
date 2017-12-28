import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {white} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user';
import './People.css';
const iconStyle = {
  height: '18px'
}
const ButtonStyle = {
  color : white,
  borderRadius: '18px',
  backgroundColor: '#0084b4'
}
const People = () => {
  return(
    <div className = "people">
    <span className = "header">People</span>
    <span className = "view-more">View all</span>
    <div className = "people-container">
    <div className = "card-1">
  <Paper zDepth = {1} className="people-card">
    <div className = "upper-half">
      <img src = "http://res.cloudinary.com/ddskvkjzs/image/upload/c_scale,h_100,w_306/v1514228272/fantasia_by_luisbc-dat1z88_raryei.jpg" alt = "User Header" className = "user-cover" />
    </div>
    <div className = "lower-half">
    <Avatar
          src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228145/Q_WeALeS_400x400_ifjxi2.jpg"
          size = {60}
          className="profilePic"
        />
      <div className = "FollowButton">
        <FlatButton label = "Follow" style = {ButtonStyle}/>
        <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Tweet to @UIDAI" />
        <MenuItem primaryText="Add or remove from lists.." />
        <MenuItem primaryText="Mute @UIDAI" />
        <MenuItem primaryText="Block @UIDAI" />
        <MenuItem primaryText="Report @UIDAI" />
        <MenuItem primaryText="Embed this Profile" />
      </IconMenu>
      </div>
      <br />
      <span className = "name">Aadhar<ActionVerifiedUser style = {iconStyle} color = '#0084b4'/></span>
      <p className = "username">@UIDAI</p>
      <p className = "user-info">Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.</p>
    </div>
  </Paper>
  </div>
  <div className = "card-2">
  <Paper zDepth = {1} className="people-card">
    <div className = "upper-half">
      <img src = "http://res.cloudinary.com/ddskvkjzs/image/upload/c_scale,h_100,w_306/v1514228030/Fire-Planet-Space-Fancy-Wallpaper-Free_nw00sq.jpg" alt = "User Header" className = "user-cover"/>
    </div>
    <div className = "lower-half">
    <Avatar
          src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514228365/6uVeWNXV_400x400_myxqk8.jpg"
          size = {60}
          className="profilePic"
        />
      <div className = "FollowButton">
        <FlatButton label = "Follow" style = {ButtonStyle}/>
        <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Tweet to @NandanNilekani" />
        <MenuItem primaryText="Add or remove from lists.." />
        <MenuItem primaryText="Mute @NandanNilekani" />
        <MenuItem primaryText="Block @NandanNilekani" />
        <MenuItem primaryText="Report @NandanNilekani" />
        <MenuItem primaryText="Embed this Profile" />
      </IconMenu>
      </div>
      <br />
      <span className = "name">Nandan Nilekani<ActionVerifiedUser style = {iconStyle} color = '#0084b4'/></span>
      <p className = "username">@NandanNilekani</p>
      <p className = "user-info">Co-founder of @Infosys. Worked on #Aadhaar. Co-author of @RebootingIndia. Author of @ImaginingIndia.</p>
    </div>
  </Paper>
  </div>
  </div>
  </div>
);
}
export default People;
