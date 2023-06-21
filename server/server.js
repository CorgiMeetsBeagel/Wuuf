require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();


const oauth = require('./oauth/oauth');
const dogRoutes = require('./routes/dogRoutes');
const swipeRoutes = require('./routes/swipeRoutes');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 



app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/', express.static(path.join(__dirname, '../client/')));


app.use('/dog',dogRoutes);
app.use('/swipe',swipeRoutes);
app.use('/github', oauth);




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
