const express = require('express');
const app = express();
const path = require('path');
const Twit = require('twit');
const T = new Twit({ 
  consumer_key: '6A2epfXr5HHWweLGjnXbTHzRM',
  consumer_secret: 'vuvtdednHWaGZxpk44fnOWKSoYPgMIfqYrCJayG0JKL6cPOGmV',
  access_token: '830218539445293056-oR7HWDR8vuNV4ghCOzCHYDYXhX52RE4',
  access_token_secret: 'JaukttHH72fwbTFyOxmTHhhEinRU99vY6eNlF7SvoOljt'
});

const PORT = process.env.PORT || 3000;
const Uri = 'http://localhost:3000';

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/search', (req, res) => {
  const searchParams = {
    q: req.query.q,
    count: 10
  }
  T.get('search/tweets', searchParams, (err, data, res) => {
    if (err) {
      return console.log(err);
    }
  }).then(data => {
    res.send(data);
  });
});

app.listen(PORT);
