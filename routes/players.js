/**
* @Author: Justin Schieck
* @Date:   2017-02-22T11:40:58-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-22T12:03:57-05:00
*/



let express = require('express');
let router = express.Router();
let players = require('../models/players');

router.get('/', function(req, res, next) {

   // use mongoose model to query mongodb for all players
   players.find(function(err, players) {
      if (err) {
         console.log(err);
         res.end(err);
         return;
      }

      // no error so send the players to the index view
      res.render('players', {
         players: players,
         title: 'Player List'
      });
   });
});

module.exports = router;
