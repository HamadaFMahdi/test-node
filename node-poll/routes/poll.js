const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pusher = require('pusher');
const Vote = require('../models/Vote');

var pusher = new Pusher({
  appId: '505285',
  key: '45d3604fa79ead7677dc',
  secret: 'a676fc258601f47fdb84',
  cluster: 'eu',
  encrypted: true
});

//the slash here actually means /poll/(anything can go here)
//because we've specified that in the app.js
router.get('/', (req, res) => {
  //here what we are gonu do is do a request to our db to fetch the POLLL
  //then we'll display this on the front end
  Vote.find().then(votes => res.json({ success: true, votes: votes}));
});

router.post('/', (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  }

  new Vote(newVote).save().then(vote => {
      //here is where we will use pusher.
      //becuase when someone clicks on a one of the poll
      //we need to send this out to everyone
      pusher.trigger('os-poll', 'os-vote', {
        points: parseInt(vote.points),
        os: vote.os
      });

      return res.json({ success: true, messege: 'Thank you for voting', vote: `your voted for: ${req.body.os}`});
    });
  })


module.exports = router;
