import { RequestHandler, Response } from "express";
import Activo from "./Activo";


export const createActivo: RequestHandler = async (req, res) => {
    const activoFound = await Activo.findOne({ name: req.body.activo.name });
    if (activoFound) {
        return res.status(303).json({ message: "activo already exist..." });
    } else {
        const activo = new Activo(req.body.activo);
        const savedActivo = await activo.save();
        res.json(savedActivo);
    }
};
export const getActivo: RequestHandler = async (req, res) => {
    const activoFound = await Activo.findById(req.params.id);
    if (!activoFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(activoFound);
    }
};
export const getActivos: RequestHandler = async (req, res) => {
    const activos = await Activo.find();
    try {
        return res.json(activos);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteActivos: RequestHandler = async (req, res) => {
    const activoDelete = await Activo.findByIdAndDelete(req.params.id);
    if (!activoDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "activo Deleted..." });
    }
};
export const updateActivos: RequestHandler = async (req, res) => {
    const activoUpdate = await Activo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!activoUpdate) {
        console.log("error")
        return res.status(204).json({ message: " resource not found..." });
        
    } else {
        return res.json({ message: "activo Updated..." });
    }
};
