var express = require('express')
import { setTournament } from "../controllers/tournament.controller"
const router = express.Router();

router.post("/", setTournament);

export default router;