import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import advController from './controllers/adventurers.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(advController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
