const express = require('express');
const controller  = require('../controller/swipeController');
const router = express.Router();

router.get('/',
    // controller.getAllDogs,
    (req, res) => {
        console.log(req.session.user)
        return res.status(200).json(req.session.user);
    });

router.post('/',
    controller.swipe,
    (req, res) => { 
        return res.status(200).send("res.locals.listOfDogs");
})


//  GET / gets 20 random users with the filters


module.exports = router;


/**
 * 
 * getListofDogs 
 * will get list opf dogs excluding those that are already in Like table but with NO
 * 
 * 
 * 
 */