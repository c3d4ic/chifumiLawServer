import { createPlayer, getPlayers, getPlayer } from "../controllers/player.controller";
var express = require('express')

const router = express.Router();

router.post("/", createPlayer);
router.get("/", getPlayers);
router.get("/", getPlayer);

export default router;