import { Router } from 'express';
import SessionController from './controller/SessionController';
import HouseController from './controller/HouseController';
import uploadFiles from './config/uploadFiles';
import multer from 'multer';

const routes = new Router();
const upload = multer(uploadFiles);

routes.post('/sessions', SessionController.store);
routes.post('/houses', upload.single('thumbnail'), HouseController.store);

export default routes;