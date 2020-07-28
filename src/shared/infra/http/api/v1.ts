import { Router } from 'express';

const v1Router = Router();

v1Router.use('/sessions', () => {
  console.log('es');
});

export default v1Router;
