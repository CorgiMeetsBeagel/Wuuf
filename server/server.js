require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();

// const imageRoutes = require('./routes/imageRoutes');
const oauth = require('./oauth/oauth');
const dogRoutes = require('./routes/dogRoutes');
const swipeRoutes = require('./routes/swipeRoutes');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
 



app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/', express.static(path.join(__dirname, '../client/')));


app.use('/dog',dogRoutes);
app.use('/swipe',swipeRoutes);
app.use('/github', oauth);
// app.use('/image', imageRoutes);


app.get('/test', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../test.html'));
});


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





// serve index.html
// router.get('/matches', controller.getMatches, (req, res) => {
//   return res.status(200).json(res.locals.matches);
// });

// router.get('/dogs', controller.getAllDogs, (req, res) => {
//     return res.status(200).json(res.locals.listOfDogs);
// });

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
