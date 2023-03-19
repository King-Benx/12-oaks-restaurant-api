import { json } from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/env';
import Logger from './config/winston';
import checkEnvVariables from './middleware';
import startServer from './server';

const app = (async () => {
  checkEnvVariables();
  const { httpServer, app } = await startServer();

  app.use(cors());
  app.use(json());
  app.use(
    morgan('combined', {
      stream: Logger.stream,
      skip: (_, res) => {
        return res.statusCode < 400;
      },
    })
  );
  app.use(
    compression({
      level: 6,
      threshold: 0,
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  Logger.info(`🚀 Server ready at http://localhost:${PORT}`);
  return app;
})();

export default app;
