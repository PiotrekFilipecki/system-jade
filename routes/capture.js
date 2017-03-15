var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

router.get('capture', ensureAuthenticated, function(req, res, next) {
  res.render('capture', { title: 'Capture' });
});

router.get('uploadvideo', ensureAuthenticated, function(req, res, next) {
  res.render('uploadvideo', { title: 'UploadVideo' });
});

router.get('edit', ensureAuthenticated, function(req, res, next) {
  res.render('edit', { title: 'Edit' });
});

router.get('/gallery', ensureAuthenticated, function(req, res, next) {
  res.render('gallery', { title: 'Galeria' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;