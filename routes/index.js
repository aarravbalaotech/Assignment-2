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
  res.render('aboutme', { 
    title: 'About '
   });
});
// projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects '
   });
});
//contact
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { 
    title: 'Contact '
   });
});
module.exports = router;
