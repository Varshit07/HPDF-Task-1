import React from 'react';
import Paper from 'material-ui/Paper';
import './TrendH.css';

const TrendH = () => {
  return (
  <Paper zDepth = {1} className = "h-trend-paper">
    <span className = "h-paper-title">Trends for you  </span>
    <span className = "h-status">  · Change </span>
    <br />
    <br />
    <div className = "h-trends">
      <p className = "h-trend-hashtag">#IndiaBecomesSuperpower</p>
      <p className = "h-no-of-tweets">9,787 Tweets</p>
      <p className = "h-trend-hashtag">#ModiUnstoppable</p>
      <p className = "h-no-of-tweets">3,782 Tweets</p>
      <p className = "h-trend-hashtag">#NetNeutrality</p>
      <p className = "h-no-of-tweets">5,189 Tweets</p>
      <p className = "h-trend-hashtag">#RehmanWinsOscar</p>
      <p className = "h-no-of-tweets">4,759 Tweets</p>
      <p className = "h-trend-hashtag">#IndiaWinsACMICPC</p>
      <p className = "h-no-of-tweets">3,487 Tweets</p>
      <p className = "h-trend-hashtag">#BulletTrainInIndia</p>
      <p className = "h-no-of-tweets">6,789 Tweets</p>
      <p className = "h-trend-hashtag">#IndiaAgainstCorruption</p>
      <p className = "h-no-of-tweets">2,783 Tweets</p>
      <p className = "h-trend-hashtag">#IndiaHostsOlympics</p>
      <p className = "h-no-of-tweets">8,981 Tweets</p>
    </div>
    <br />
  </Paper>
);
}

export default TrendH;
