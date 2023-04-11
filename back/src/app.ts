import fastify from 'fastify';
import urlRoutes from './routes/url/url.routes';

const server = fastify();

server.register(urlRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
