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
  
  // Adicione uma rota PUT para /restaurantes/:id
server.put('/restaurantes/:id', (req, res, next) => {
    const restauranteId = parseInt(req.params.id); // Obtenha o ID do restaurante da URL
    const newData = req.body; // Obtenha os dados atualizados do corpo da requisição
    const db = router.db; // Acesse o banco de dados JSON
  
    // Atualize o restaurante no banco de dados JSON
    db.get('restaurantes')
      .find({ id: restauranteId })
      .assign(newData)
      .write();
  
    res.status(200).json(newData); // Envie uma resposta de sucesso com os dados atualizados
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