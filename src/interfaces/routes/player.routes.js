const express = require("express");
const router = express.Router();

const  getPlayersController  = require("../controllers/player.controller");

router.get("/", getPlayersController.getPlayers);

module.exports = router;
