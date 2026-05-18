import 'dotenv/config';
import { env } from './config/Env';
import server from './server';

server.listen(env.PORT, env.HOST);
