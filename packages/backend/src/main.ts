import dotenv from 'dotenv';
import jsonServer from 'json-server';
import 'tsconfig-paths/register.js';

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

// JSON Server API
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running on port: ${PORT}`);
});
