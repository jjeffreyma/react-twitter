import React from 'react';
import TweetListItem from './tweet_list_item.js';

const TweetList = ({ tweets }) => {
  const tweetItems = tweets.map(tweet => {
    return <TweetListItem key={tweet.id} tweet={tweet.text} time={tweet.created_at} user={tweet.user.screen_name} />
  });

  return (
    <ul>
      {tweetItems}
    </ul>
  );
}

export default TweetList;