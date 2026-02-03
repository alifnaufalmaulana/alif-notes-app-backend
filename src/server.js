// const Hapi = require('@hapi/hapi');
// const routes = require('./routes');

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: 'localhost',
//     routes: {
//       cors: {
//         origin: ['*'],
//       },
//     },
//   });

//   server.route(routes);

//   await server.start();
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };

// init();

import server from './server/index.js';

const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
