import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends.css';

const Trends = () => {
  return (
  <Paper zDepth = {1} className = "trend-paper">
    <span className = "paper-title">Trends for you  </span>
    <span className = "status">  · Change </span>
    <br />
    <br />
    <div className = "trends">
      <p className = "trend-hashtag">Valsad</p>
      <p className = "no-of-tweets">1,787 Tweets</p>
      <p className = "trend-hashtag">Narendra Modi</p>
      <p className = "no-of-tweets">4,782 Tweets</p>
      <p className = "trend-hashtag">#ChangingRelationships</p>
      <p className = "no-of-tweets">3,189 Tweets</p>
      <p className = "trend-hashtag">Washington Sundar</p>
      <p className = "no-of-tweets">1,759 Tweets</p>
      <p className = "trend-hashtag">Dalai Lama</p>
      <p className = "no-of-tweets">2,487 Tweets</p>
      <p className = "trend-hashtag">Pvsindhu</p>
      <p className = "no-of-tweets">6,719 Tweets</p>
      <p className = "trend-hashtag">Roger Federer</p>
      <p className = "no-of-tweets">3,783 Tweets</p>
      <p className = "trend-hashtag">Shahrukh Khan</p>
      <p className = "no-of-tweets">8,901 Tweets</p>
    </div>
    <br />
  </Paper>
);
}

export default Trends;
