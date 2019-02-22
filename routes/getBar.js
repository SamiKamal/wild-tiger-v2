var express = require('express');
var router = express.Router();
var Menu = require('../models/bar')

/* GET home page. */

router.get('/bar', function(req, res, next) {
  Menu.find({}, function (err,bars) {
    if(err) return console.err(err);
        res.render('bar',{
          header: 'Bar',
          menu: bars
        });
        

});
});

module.exports = router;
