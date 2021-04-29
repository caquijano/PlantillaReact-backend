import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import userRoutes from './routes/Users/users.routes'
//import itemRoutes from "./routes/Items/items.routes";
import activoRoutes from "./routes/Activos/activos.routes";
import rolesRoutes from "./routes/Roles/roles.routes";
import photoRoutes from "./routes/Photos/photos.routes"
import { createRoles } from './libs/initialSetup';
import { createAdmin } from './libs/createAdmin';
const app =  express()
createRoles();
createAdmin();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(userRoutes, activoRoutes, rolesRoutes, photoRoutes)

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;