const express = require('express');
const router = express.Router();
const axios = require('axios');

// console.log(process.env.CLIENTID);
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
    console.log(response.data);
    res.redirect('localhost:8080/match');
  }).catch((error) => {
    console.log('err',error);
  });

  

});



router.get('/login', function (req, res) {  
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${callbackUrl}&scope=user:email`);
})


module.exports = router;