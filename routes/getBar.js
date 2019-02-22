var express = require('express'); 
var router = express.Router();
var Menu = require('../models/menu')
var assert = require('assert')
var mongoose = require('mongoose');

var menusJSON, MenuJsoon
/* GET home page. */

router.get('/bar', function(req, res, next) {
  Menu.find({}, function (err,menus) {
    if(err) return console.err(err);
    menusJSON = JSON.stringify(menus)
    MenuJsoon = JSON.parse(menusJSON)
        res.render('menu',{
          header: 'Menu',
          menu: MenuJsoon
        });
        

});
});

module.exports = router;
