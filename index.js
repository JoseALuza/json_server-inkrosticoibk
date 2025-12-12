// index.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Configuración de Middlewares (Logger, CORS, no-cache, etc.)
server.use(middlewares);

// Middleware para parsear el cuerpo de las peticiones (necesario para POST/PUT)
server.use(jsonServer.bodyParser);

// Monta el router en la ruta raíz
// Esto habilitará automáticamente rutas como GET /registros, POST /registros, etc.
server.use(router);

// Puerto: usa el que provea el entorno (Render/Heroku) o el 3000 localmente
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server Inkrostico-IBK is running on port ${port}`);
  console.log(`Endpoint disponible: http://localhost:${port}/registros`);
});