import express from 'express';
import { config } from './config';
import DB from './models';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(config.port,async  () => {
    try {        
        //    DB.sync() ;
        await DB.sync({force:true}) ;
        // console.log(`Express is listening at http://localhost:${config.port}`);
    } catch (error) {        
        console.log('internal server error');
        console.log(error);
    }
});