const hbs = require('hbs');

//HBS Helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' ');

  palabras = palabras.map(palabra => {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
  });

  return palabras.join(' ');

});

