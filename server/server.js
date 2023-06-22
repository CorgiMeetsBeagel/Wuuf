require('dotenv').config();
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const store = require('better-express-store');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();

const matchesRoutes = require('./routes/matchesRoutes');
const oauth = require('./oauth/oauth');
const dogRoutes = require('./routes/dogRoutes');
const swipeRoutes = require('./routes/swipeRoutes');
const profileRoutes = require('./routes/profileRoutes')

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(session({
  secret: process.env.SESSION_SECRET,
    genid: function(req) {
    return uuidv4() // use UUIDs for session IDs
  },
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
  // change dbPath to the path to your database file
  store: store({  dbPath: './server/model/sess.db'})
}));




// middleware to test if authenticated
function isAuthenticated(req, res, next) {
  console.log('req.session.user is not set',req.session.user)
  if (req.session.user !== undefined) {
    console.log('req.session.user',req.session.user)
    return next()
  }
  else {return next('route')}
}



app.get('/',isAuthenticated ,(req, res) => {
  res.redirect('http://localhost:8080/matches');
});

app.get('/',  (req, res) => {
  console.log('serving anon ')
  res.redirect('http://localhost:8080/login');
});




app.use('/dog',dogRoutes);
app.use('/getprofiles', profileRoutes);
app.use('/swipe',isAuthenticated,swipeRoutes);
app.use('/github', oauth);

app.get('/test', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../test.html'));
});


/**
 * /image and the test.html file are tests to show how to upload a
 * file in the server
 */
app.post('/image', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "image") is used to retrieve the uploaded file
  sampleFile = req.files.image;
  uploadPath = path.resolve(__dirname, '../public/uploads/', sampleFile.name);

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});



app.get('/*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});


app.use((req, res) => {
  return res.status(404).send('This is not the page you\'re looking for...',req.originalUrl);
});


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port 3000.`));
