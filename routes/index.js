const express = require('express');
const router = express.Router();

const guns_controller = require('../controllers/gunsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog')
});
 

module.exports = router;
