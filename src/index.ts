import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.listen(3333, () => console.log('server is running on port 3333 🚀'));
