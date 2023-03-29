var express = require('express')
import { setTournament, getTournament, addPlayerInTournament } from "../controllers/tournament.controller"
const router = express.Router();

router.post("/", setTournament);
router.get("/", getTournament);
router.post("/player", addPlayerInTournament);

export default router;