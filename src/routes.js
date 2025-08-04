import { Router } from 'express';
import SessionController from './controller/SessionController';
import HouseController from './controller/HouseController';
import uploadFiles from './config/uploadFiles';
import multer from 'multer';
import DashboardController from './controller/DashboardController';

const routes = new Router();
const upload = multer(uploadFiles);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses/:house_id', HouseController.destroy);


routes.get('/dashboard', DashboardController.show);

export default routes;