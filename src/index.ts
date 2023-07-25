import express from 'express';
import cors from 'cors';
import { config } from './config';
import DB from './models';
import mainRouter from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1', mainRouter);

app.listen(config.port, async () => {
    try {
        await DB.sync();
        // await DB.sync({ force: true });
        // console.log(`Express is listening at http://localhost:${config.port}`);
    } catch (error) {
        console.log('internal server error');
        console.log(error);
    }
});