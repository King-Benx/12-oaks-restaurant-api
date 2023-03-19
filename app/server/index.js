import { createServer } from 'http';
import express from 'express';

export default async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  return { httpServer, app };
}
