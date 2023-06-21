const express = require('express');
const controller  = require('../controller/imageController');
const router = express.Router();

// router.post('/', controller.createDog, (req, res) => {
//     res.status(200).send(res.locals.user); 
// })

router.post('/',
    controller.image,
    (req, res) => {
        return res.status(200).send("ok");
})

module.exports = router;

