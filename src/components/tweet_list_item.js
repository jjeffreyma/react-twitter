import React from 'react';

const TweetListItem = ({ tweet, time, user }) => {
  const userLink = 'https://twitter.com/' + user;
  return (
    <li>
      <div className="tweet-time">{time}</div>
      <a href={userLink} className="tweet-list-item">{tweet}</a>
    </li>
  );
};

export default TweetListItem;