import { Router } from 'express';
import usersRouter from './users';
import rolesRouter from './roles';
import permissionsRouter from './permissions';

const v1Router = Router();

v1Router.use("/v1", usersRouter);
v1Router.use("/v1", rolesRouter);
v1Router.use("/v1", permissionsRouter);

export default v1Router;