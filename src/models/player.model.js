const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  team: String,
  position: String,
  currentStats: {
    goals: Number,
    shots_on_target: Number
  }
});

playerSchema.statics.findAllPlayers = function() {
  return this.find();
};

module.exports =  mongoose.model("Player", playerSchema, "Player");