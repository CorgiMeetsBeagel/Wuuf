const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../model/poochie.js');

const clientID = process.env.CLIENTID;
const clientSecret = process.env.SECRET;
const callbackUrl = process.env.CALLBACK_URL


let access_token;

router.get('/callback', (req, res) => {

  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code


  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token;
    res.redirect('/github/success');
  })
});


router.get('/success',  function(req, res) {


  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  }).then((response) => {
    req.session.user = response.data.name;

if (userRegistered(req.session.user)) {
  res.redirect('http://localhost:8080/matches');
} else {
  res.redirect('http://localhost:8080/signup?user=' + req.session.user);
}


  }).catch((error) => {
    console.log('err',error);
  });

  

});



router.get('/login', function (req, res) {  
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${callbackUrl}&scope=user:email`);
})


function userRegistered(user) {

    const stmt =  db.prepare('SELECT * FROM Pooch WHERE userName = ?;');
    const result = stmt.all(user);
    console.log(result)
    

return result.length > 0

}


module.exports = router;