import express from "express";
import controller from "../controllers/info";
const router = express.Router();

router.get("/info", controller.getInfo);

export = router;
