import { Router } from 'express';

import dealRouter from '@modules/routes/deal';

const v1Router = Router();

v1Router.use('/deals', dealRouter);

export default v1Router;
