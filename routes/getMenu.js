var express = require('express');
var router = express.Router();
var Menu = require('../models/menu')
/* GET home page. */

router.get('/menu', function(req, res, next) {
  Menu.find({}, function (err,menus) {
    if(err) return console.err(err);
        res.render('menu',{
          header: 'Menu',
          menu: menus
        });
        

});
});

module.exports = router;
