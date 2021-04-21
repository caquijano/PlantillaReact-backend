import { RequestHandler, Response } from "express";
import Item from "./Item";


export const createItem: RequestHandler = async (req, res) => {
    const itemFound = await Item.findOne({ name: req.body.name });
    if (itemFound) {
        return res.status(303).json({ message: "item already exist..." });
    } else {
        
        const item = new Item(req.body);
        const savedItem = await item.save();
        res.json(savedItem);
    }
};
export const getItem: RequestHandler = async (req, res) => {
    const itemFound = await Item.findById(req.params.id);
    if (!itemFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(itemFound);
    }
};
export const getItems: RequestHandler = async (req, res) => {
    const items = await Item.find();
    try {
        return res.json(items);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteItems: RequestHandler = async (req, res) => {
    const itemDelete = await Item.findByIdAndDelete(req.params.id);
    if (!itemDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "item Deleted..." });
    }
};
export const updateItems: RequestHandler = async (req, res) => {
    const itemUpdate = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!itemUpdate) {
        console.log("error")
        return res.status(204).json({ message: " resource not found..." });
        
    } else {
        return res.json({ message: "item Updated..." });
    }
};
