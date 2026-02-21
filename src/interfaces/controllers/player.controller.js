const  findAllPlayersUseCase = require('../../usecases/findAllPlayers.usecase');

exports.getPlayers = async (req, res) => {
  const players = await findAllPlayersUseCase.findAllPlayers();
  
  res.json({players: players.players});
};
