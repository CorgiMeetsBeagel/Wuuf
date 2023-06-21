const express = require('express');
const router = express.Router();
const axios = require('axios');

// console.log(process.env.CLIENTID);
const clientID = process.env.CLIENTID;
const clientSecret = process.env.SECRET;



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
    access_token = response.data.access_token
    res.redirect('localhost:8080/swipe');
  })
});


router.get('/success', function(req, res) {

  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response) => {
    console.log(response.text());
    res.render('https://localhost:8080/swipe/swipe',{ userData: response.data });
  })
});



router.get('/login', function(req, res) {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:8080/api/github/callback&scope=user:email`);
})


module.exports = router;