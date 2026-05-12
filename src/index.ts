import 'dotenv/config';
import server from './server';

const PORT = Number(process.env.PORT!);
const HOST = String(process.env.HOST!);

server.listen(PORT, HOST);