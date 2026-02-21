const PlayerModel = require('../models/player.model');
const efficiencyService = require('../services/efficiencyGoals.service');

exports.findAllPlayers = async () => {
  const players = await PlayerModel.findAllPlayers();
  console.log(players);
  for (const player of players) {
    const efficiency = await efficiencyService.efficiencyOfGoals(
      player.currentStats.goals,
      player.currentStats.shots_on_target
    );
    player._doc.efficiencyGoal = efficiency;
  }

  return {  players: players};
};
