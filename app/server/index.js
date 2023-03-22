import { createServer } from 'http';
import express from 'express';
import restaurantRouter from '../routes/restaurants';

export default async function startServer() {
  const app = express();
  app.use('/api/restaurants', restaurantRouter);
  const httpServer = createServer(app);

  return { httpServer, app };
}
