const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'application/json'});

  const salida = {
    nombre: 'Tomas',
    edad: 34,
    url: req.url
  };

  // res.write('Hola Mundo');
  res.write(JSON.stringify(salida));
  res.end();
});

server.listen(8080);

console.log('Server running at http://localhost:8080/');