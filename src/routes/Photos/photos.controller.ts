import { RequestHandler, Response } from "express";
import Photo from "./Photo";
import path from 'path'


export const createPhoto: RequestHandler = async (req, res) => {
    const newPhoto = { imagePath: req.file.path };
    const photo =  new Photo(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
};
export const getPhoto: RequestHandler = async (req, res) => {
    const photoFound = await Photo.findById(req.params.id);
    if (!photoFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(photoFound);
    }
};
export const getPhotos: RequestHandler = async (req, res) => {
    const photos = await Photo.find();
    console.log("hola")
    try {
        return res.json(photos);
    } catch (error) {
        return res.json(error);
    }
};
export const deletePhotos: RequestHandler = async (req, res) => {
    const photoDelete = await Photo.findByIdAndDelete(req.params.id);
    if (!photoDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "photo Deleted..." });
    }
};
