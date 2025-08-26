import express from "express";
import simpleMessage from "../controllers/test.controller.js";


const router=express.Router();

router.get("/",simpleMessage);

export default router;
