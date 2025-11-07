var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home '
   });
});
// about page
router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About '
   });
});
// projetcs page
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects '
   });
});
//contact
router.get('/contactme', function(req, res, next) {
  res.render('index', { 
    title: 'Contact '
   });
});
module.exports = router;
