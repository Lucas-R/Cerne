import { Router } from 'express';
import RolesCreateController from '@/version/v1/controllers/roles/RolesCreateController';
import RolesFindAllController from '@/version/v1/controllers/roles/RolesFindAllController';
import RolesFindByIdController from '@/version/v1/controllers/roles/RolesFindByIdController';
import RolesUpdateController from '@/version/v1/controllers/roles/RolesUpdateController';
import RolesSoftDeleteController from '@/version/v1/controllers/roles/RolesSoftDeleteController';
import RolesUndoDeleteController from '@/version/v1/controllers/roles/RolesUndoDeleteController';
import RolesDeleteController from '@/version/v1/controllers/roles/RolesDeleteController';

const rolesRouter = Router();

rolesRouter.post("/roles", async (req, res) => {
    return await new RolesCreateController().execute(req, res); 
});

rolesRouter.get("/roles", async (req, res) => {
    return await new RolesFindAllController().execute(req, res); 
});

rolesRouter.get("/roles/:id", async (req, res) => {
    return await new RolesFindByIdController().execute(req, res); 
});

rolesRouter.put("/roles/:id", async (req, res) => {
    return await new RolesUpdateController().execute(req, res);
});

rolesRouter.put("/roles/soft-delete/:id", async (req, res) => {
    return await new RolesSoftDeleteController().execute(req, res);
});

rolesRouter.put("/roles/undo-delete/:id", async (req, res) => {
    return await new RolesUndoDeleteController().execute(req, res);
});

rolesRouter.delete("/roles/delete/:id", async (req, res) => {
    return await new RolesDeleteController().execute(req, res);
});

export default rolesRouter;