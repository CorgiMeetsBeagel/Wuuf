const express = require('express');
const controller  = require('../controller/matchesController');
const router = express.Router();

// router.post('/', controller.createDog, (req, res) => {
//     res.status(200).send(res.locals.user); 
// })

router.get('/',
    controller.match,
    (req, res) => {
        return res.status(200).json(res.locals.result);
})

module.exports = router;

