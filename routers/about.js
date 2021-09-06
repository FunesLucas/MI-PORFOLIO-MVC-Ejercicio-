const express = require('express');
const aboutController = require('../controllers/aboutController.js');
const router = express.Router();

const mainController = require('../controllers/aboutController.js')


router.get ("/about",aboutController.about )


module.exports = router;