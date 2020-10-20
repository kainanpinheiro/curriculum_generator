import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CurriculoController from './app/controller/CurriculoController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/curriculos', CurriculoController.index);
routes.get('/curriculo/:id', CurriculoController.show);
routes.post('/curriculo', upload.single('file'), CurriculoController.store);
routes.delete('/curriculo/:id', CurriculoController.destroy);

export default routes;
