import { Router } from "express";
import * as itemController from './items.controller'

const router = Router();

router.get('/items', itemController.getItems);

router.get('/items/:id', itemController.getItem);

router.post('/items', itemController.createItem);

router.delete('/items/:id', itemController.deleteItems);

router.put('/items/:id', itemController.updateItems);

export default router