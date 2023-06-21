const { query, json } = require('express');
const controller = {};
const { v4: uuidv4 } = require('uuid');
const db = require('../model/poochie.js');




  // angelo
  // 511b60ba-9c3b-4ddb-97b7-46bf9412a5b7

  // pippo
  // 96407b80-460f-47bc-9765-324b93270e63

  // ciuccio
  // 537986d9-0b48-43ac-af97-a2373d718345





controller.match =  (req, res, next) => {
//gets an array of only ONE potential match
  
  try {
    const { name, userName, breed, size, age, gender } = req.body;
    const stmt =  db.prepare('SELECT * FROM Pooch WHERE DeletedOn IS NULL;');
    const result = stmt.all();
    console.log(result)
    res.locals.result = result;
    return next();

  } catch (err) {
    console.log(err);
    return next(err);
  }
}


controller.getOneDog =  (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const stmt = db.prepare("SELECT * FROM Pooch WHERE id = ?");
  const result = stmt.get(id);
  res.locals.foundDog = result;
  return next();
}


controller.createDog = (req, res, next) => {
  const { name, userName, owner, breed, size, age, gender } = req.body;
  try {
    const stmt =  db.prepare(`INSERT INTO Pooch (id,userName,name,breed,size,age,gender) VALUES (?, ?,?, ?, ?, ?, ?) RETURNING *;`);
    const result = stmt.run(uuidv4(), userName, name, breed, size, age, gender);

  if (result.changes > 0) {
    res.locals.result = result.changes;
    return next()
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
    const { name, userName, owner, zip, breed, size, age, gender } = req.body;



  } catch (err){
    
  }
    return next();
}


controller.updateDog =  (req, res, next) => {
  try {
    const { name, userName, owner, zip, breed, size, age, gender } = req.body;



  } catch (err){
    
  }
    return next();
}






module.exports = controller;
