import express from 'express';
import router from './routes/test.routes.js';
import placesRouter from './routes/places.routes.js';

const app=express();
const port=5000;

app.use(express.json());
app.use('/api/test',router);
app.use('/api',placesRouter);

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})