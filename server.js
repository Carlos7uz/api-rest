const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.all('*', (req, res, next) => {
    router(req, res, next)
})

server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
)


server.listen(3000, () => {
    console.log('JSON Server is running')
});

module.exports = server