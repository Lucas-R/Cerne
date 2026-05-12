import { Router } from 'express';
import UsersCreateController from '../../controllers/users/UsersCreateController';
import UsersFindAllController from '../../controllers/users/UsersFindAllController';
import UsersUpdateController from '../../controllers/users/UsersUpdateController';


const usersRouter = Router();

usersRouter.post("/users", async (req, res) => {
    return await new UsersCreateController().execute(req, res);
});

usersRouter.get("/users", async (req, res) => {
    return await new UsersFindAllController().execute(req, res);
});

usersRouter.put("/users/:id", async (req, res) => {
    return await new UsersUpdateController().execute(req, res);
});

export default usersRouter;