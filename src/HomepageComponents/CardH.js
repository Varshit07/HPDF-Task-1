import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './CardH.css';
const CardH = () => {
  return(
  <Paper zDepth = {1} className="h-card">
    <div>
      <img className="h-header" src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225787/1500x500-landscape-twitter-header09_xssjuz.jpg" alt = "Dummy Placeholder for cover"/>
      <div className="h-footer">
          <Avatar
            src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225611/6TY0EjQh_400x400_rqcbun.jpg"
            size = {90}
            className="h-profilePic"
          />
        <div className="h-userInfo">
          <p className = "h-user">Varshit Shah</p>
          <p className = "h-username">@Varshit07</p>
        </div>
        <div className="h-statContainer">
          <div className="h-Button">
            <p className="h-title">Tweets</p>
            <p className="h-statnumber">20</p>
          </div>
          <div className="h-Button">
            <p className="h-title">Following</p>
            <p className="h-statnumber">250</p>
          </div>
          <div className="h-Button">
            <p className="h-title">Followers</p>
            <p className="h-statnumber">200</p>
          </div>
        </div>
        <br />
      </div>
    </div>
    <br />
  </Paper>
);
}
export default CardH;
