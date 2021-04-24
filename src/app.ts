import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/Users/users.routes'
//import itemRoutes from "./routes/Items/items.routes";
import activoRoutes from "./routes/Activos/activos.routes";
import rolesRoutes from "./routes/Roles/roles.routes";
import { createRoles } from './libs/initialSetup';
import { createAdmin } from './libs/createAdmin';
const app =  express()
createRoles();
createAdmin();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(userRoutes, activoRoutes, rolesRoutes)

export default app;