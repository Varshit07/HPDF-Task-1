import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import './News.css';
const CardStyle = {
  width: '65%'
}
const TextStyle = {
  color: 'grey'
}
const News = () => {
  return(
    <div className = "news-container">
    <span className = "header">Top news</span>
    <span className = "view-more">View all</span>
    <Card style = {CardStyle}>
  <CardMedia>
    <img src="http://res.cloudinary.com/ddskvkjzs/image/upload/v1514227847/arun-jaitley-7591_pvx65v.jpg" alt="Arun Jaitley" />
  </CardMedia>
  <CardTitle
  title="Open to improvements in Aadhaar-based privacy framework: Jaitley - Times of India"
  />
  <CardText style = {TextStyle}>
    India News: Union finance minister Arun Jaitley on Saturday said the government will remain open to suggestions for improving the privacy framework surrounding Aadhar…
  </CardText>
  <br />
  <CardActions>
  <span className = "publisher-avatar">
    <Avatar
      src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514227933/PG2_gebm_400x400_uhwqym.jpg"
      size = {20}
    />
    </span>
    <span className = "publisher">Times Of India</span>
    <span className = "publish-date">Dec 24, 2017</span>
  </CardActions>
</Card>
</div>
  );
}

export default News;
