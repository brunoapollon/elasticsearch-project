import 'reflect-metadata';
import express from 'express';
import './database';
import { routes } from './index.routes';

const app = express();
app.use(routes);

app.listen(3333, () => console.log('server is running on port 3333 🚀'));
