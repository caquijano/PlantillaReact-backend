import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as activoController from './activos.controller'

const router = Router();

router.get('/activos', activoController.getActivos);

router.get('/activos/:id', activoController.getActivo);

router.post('/activos', auth.verifyToken, activoController.createActivo);

router.delete('/activos/:id/:token', auth.verifyToken, auth.isAdmin, activoController.deleteActivos);


export default router