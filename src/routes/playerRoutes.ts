import { createPlayer } from "../controllers/player.controller";
var express = require('express')

const router = express.Router();

router.post("/", createPlayer);

export default router;