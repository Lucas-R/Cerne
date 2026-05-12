import express from 'express';
import v1Router from '../version/v1/routes';

const server = express();
server.use(express.json());

server.use("/api", v1Router);

export default server;