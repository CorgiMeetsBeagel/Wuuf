const express = require('express');
const controller  = require('../controller/profileController');
const router = express.Router();

router.get('/',
controller.getSomeProfiles, 
(req, res) => {
  return res.status(200).json({profiles: res.locals.profilesArr});
});

module.exports = router;