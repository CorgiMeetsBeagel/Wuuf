const db = require('../model/poochie.js');
const controller = {};

controller.getSomeProfiles = (req, res, next) => {
  try {
    // const userName  = req.session.user;
    const userName  = 'gerald'
    console.log(userName);
    const statement = db.prepare(`SELECT id FROM Pooch WHERE userName = ?`);
    const usernameId = statement.get(userName);
    console.log(usernameId)
    const stmt = db.prepare(`SELECT P.* FROM Pooch as P
    WHERE P.id NOT IN (SELECT poochid FROM swipe)
    AND P.id <> ?
    AND DeletedOn IS NULL
    ORDER BY RANDOM() LIMIT 20;
    `);
    const result = stmt.all(usernameId.id);
    res.locals.profilesArr = result;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = controller;