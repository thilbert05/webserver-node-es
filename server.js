const path = require('path');
const express = require('express');

const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 8080;

const app = express();

const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const publicDirectory = path.join(__dirname, '/public');
const viewsDirectory = path.join(__dirname, '/views');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(viewsDirectory);

//Express HBS Engine
const partialsDirectory = path.join(__dirname, '/views/partials');
hbs.registerPartials(partialsDirectory);
app.set('view engine', 'hbs');



app.use(connectLiveReload());
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'tomas hIlbert',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    imgUrl: '/assets/img/about.png',
  });
})  

// app.get('/',(req, res, next) => {
//   // res.send('Hola mundo');

//   const salida = {
//     nombre: 'Tomas',
//     edad: 34,
//     url: req.url
//   };
//   res.send(salida);
// });

// app.get('/data',(req, res, next) => {
//   res.send('Hola data');
// });

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`)
});