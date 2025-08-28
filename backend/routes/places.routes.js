import express from 'express';
import { getAllPlaces } from '../controllers/places.controller.js';


const placesRouter = express.Router();

placesRouter.get('/places', getAllPlaces);

export default placesRouter;