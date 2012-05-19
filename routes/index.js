
/*
 * GET home page.
 */
var test = require('../models/test.js');

exports.index = function(req, res){
  res.render('index', { title: 'Selectorz', test: test } );
};