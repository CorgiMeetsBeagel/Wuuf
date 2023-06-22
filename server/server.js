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
  
console.log('req.session.user',req.session.user)

  if (req.session.user !== undefined) next()
  else next('route')
}



app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/match');
});

app.get('/', isAuthenticated, (req, res) => {
  console.log('req.session.user',req.session.user)
  express.static(path.join(__dirname, '../client/'))
});



app.use('/dog',dogRoutes);
app.use('/swipe',swipeRoutes);
app.use('/github', oauth);
app.use('/matches',isAuthenticated, matchesRoutes);

app.get('/test', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../test.html'));
});



//s%3A2973e258-2c6c-4cea-96a4-4fac5ce2c823.U0nF6jAmqOA5YlJnK97EfmVkq5VpknIDpi12oJXzbFY
//s%3A51b9cb55-4adc-4daa-8a3b-03f3467ebb6c.xGdF1CWHHJbamLnjkI%2BR6y8wz4oFngSIgri0QAxh404


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




app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

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
