const { query, json } = require('express');
const controller = {};
const { v4: uuidv4 } = require('uuid');
const db = require('../model/poochie.js');


controller.getAllDogs =  (req, res, next) => {

  try {
    const { name, userName, breed, size, age, gender } = req.body;
    const stmt =  db.prepare(`SELECT * 
    FROM Pooch 
    WHERE DeletedOn IS NULL
    ;`);
    const result = stmt.all();
    console.log(result)
    res.locals.allDogs = result;
    return next();

  } catch (err) {
    console.log(err);
    return next(err);
  }
}


controller.getOneDog =  (req, res, next) => {

  try{
    const { id } = req.params;
    const stmt = db.prepare("SELECT * FROM Pooch WHERE id = ?");
    const result = stmt.get(id);
    res.locals.foundDog = result;
    return next();

  } catch(err) {
    return next(err);
  }
}


controller.createDog = (req, res, next) => {

  console.log(req.body)

  // return next();

  const { name, userName, breed, size, age, gender } = req.body;
  userName = req.session.user;
  try {
    const stmt =  db.prepare(`INSERT INTO Pooch (id, userName,name, breed, size, age, gender) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *;`);
    const result = stmt.run(uuidv4(), userName, name, breed, size, age, gender);
  
    if (result.changes > 0) {
      res.locals.changes = result.changes;
      return next();
    } else {
    return next({error: 'nothing entered'});
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}


controller.deleteDog =  (req, res, next) => {
  try {
    
    const { id } = req.params;
    const deleteDate = Date.now();
    const stmt = db.prepare('UPDATE pooch SET DeletedOn = ? WHERE id = ?');
    const update = stmt.run(deleteDate, id);
    return next();
  } catch (err){
    
  }
}


controller.updateDog =  (req, res, next) => {
  try {
    const { id } = req.params;

    const { userName, name, owner, breed, size, age, gender } = req.body;
    const stmt = db.prepare(`UPDATE pooch SET (name, userName, owner, breed, size, age, gender) VALUES (?, ?, ?, ?, ?, ?, ?) WHERE id = ?`)
    const update = stmt.run(name, userName, owner, breed, size, age, gender, id); 


  return next();
  } catch (err){
    return next(err);
  }   
}






module.exports = controller;
