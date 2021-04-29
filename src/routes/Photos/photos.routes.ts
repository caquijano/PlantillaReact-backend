import express, { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as photoController from './photos.controller'
import upload from '../../libs/multer'

const router = Router();

router.get('/photos', photoController.getPhotos);

router.get('/photos/:id', photoController.getPhoto);

router.post('/photos',upload.single('image'), photoController.createPhoto);

router.delete('/photos/:id/:token', auth.verifyToken,auth.isAdmin, photoController.deletePhotos);

//router.put('/photos/:id', auth.verifyToken ,auth.isAdmin , photoController.updatePhoto);

export default router