const { query, json } = require('express');
const controller = {};


controller.image = async (req, res, next) => {

  

  
  
console.log(req.files)

  // req.files.image.mv('./public/uploads/' + req.files.image.name, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // })


  return next();
}


module.exports = controller;
