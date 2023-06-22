const express = require('express');
const controller  = require('../controller/dogController');
const router = express.Router();

// router.post('/', controller.createDog, (req, res) => {
//     res.status(200).send(res.locals.user);
// })

router.get('/',
    controller.getAllDogs,
    (req, res) => {
        return res.status(200).send(res.locals.allDogs);
    });

router.get('/:id',
    controller.getOneDog,
    (req, res) => {
        return res.status(200).send(res.locals.foundDog);
    });

router.post('/',
    controller.createDog,
    (req, res) => {


        
        return res.status(200).send(res.locals.newDog);
    });

router.put('/:id',
    controller.updateDog,
    (req, res) => {
        return res.status(200).send('ok');
    });

router.delete('/:id',
    controller.deleteDog,
    (req, res) => {
        return res.status(200).send(res.locals.deletedDog);
    });

module.exports = router;


/**
 * 
 * getListofDogs 
 * will get list opf dogs excluding those that are already in Like table but with NO
 * 
 * 
 * 
 */