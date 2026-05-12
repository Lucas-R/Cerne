import { Router } from 'express';
import PermissionsCreateController from '@/version/v1/controllers/permissions/PermissionsCreateController';
import PermissionsFindAllController from '@/version/v1/controllers/permissions/PermissionsFindAllController';
import PermissionsFindByIdController from '@/version/v1/controllers/permissions/PermissionsFindByIdController';
import PermissionsUpdateController from '@/version/v1/controllers/permissions/PermissionsUpdateController';
import PermissionsSoftDeleteController from '@/version/v1/controllers/permissions/PermissionsSoftDeleteController';
import PermissionsUndoDeleteController from '@/version/v1/controllers/permissions/PermissionsUndoDeleteController';
import PermissionsDeleteController from '@/version/v1/controllers/permissions/PermissionsDeleteController';

const permissionsRouter = Router();

permissionsRouter.post("/permissions", async (req, res) => {
    return await new PermissionsCreateController().execute(req, res); 
});

permissionsRouter.get("/permissions", async (req, res) => {
    return await new PermissionsFindAllController().execute(req, res); 
});

permissionsRouter.get("/permissions/:id", async (req, res) => {
    return await new PermissionsFindByIdController().execute(req, res); 
});

permissionsRouter.put("/permissions/:id", async (req, res) => {
    return await new PermissionsUpdateController().execute(req, res);
});

permissionsRouter.put("/permissions/soft-delete/:id", async (req, res) => {
    return await new PermissionsSoftDeleteController().execute(req, res);
});

permissionsRouter.put("/permissions/undo-delete/:id", async (req, res) => {
    return await new PermissionsUndoDeleteController().execute(req, res);
});

permissionsRouter.delete("/permissions/delete/:id", async (req, res) => {
    return await new PermissionsDeleteController().execute(req, res);
});

export default permissionsRouter;