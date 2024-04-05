const jsonServer = require('json-server');
const express = require('express')
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(express.json());

// Rota para GET
server.get('/restaurantes', (req, res, next) => {
    return router(req, res, next);
  });
  
  // Rota para POST
  server.post('/restaurantes', (req, res, next) => {
    return router(req, res, next);
  });
  
  // Rota para PUT
  server.put('/restaurantes/:id', (req, res, next) => {
    return router(req, res, next);
  });
  
  // Rota para DELETE
  server.delete('/restaurantes/:id', (req, res, next) => {
    return router(req, res, next);
  });
  
  // Rota para outras requisições
  server.use((req, res, next) => {
    return router(req, res, next);
  });

server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
)


server.listen(3000, () => {
    console.log('JSON Server is running')
});

module.exports = server