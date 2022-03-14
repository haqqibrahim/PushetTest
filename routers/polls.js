const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1361196',
  key: 'b7b0eb7a43d3e7ab404b',
  secret: '69e624c2e95aef8a882d',
  cluster: 'eu',
  useTLS: true,
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os,
  });
  return res.json({ sucess: true, message: 'Thank you  for voting' });
});

module.exports = router;
