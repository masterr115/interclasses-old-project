const GameModel = require("../../app/models/mongodb/games");
var mongoose = require("mongoose");

async function CreateGame(
  name,
  description,
  imglink,
  date,
  rooms,
  location,
  prize
) {
  const response = await GameModel.findOne({ name });
  if (response == null) {
    const game = [
      {
        _id: mongoose.Types.ObjectId(),
        name: name,
        description: description,
        rooms: rooms,
        date: date,
        img: imglink,
        location: location,
        prize: prize,
      },
    ];
    await GameModel.create(game);
    return {
      status: 200,
      error: false,
      errormessage: "Jogo criado com sucesso!",
    };
  } else {
    return {
      status: 502,
      error: true,
      errormessage: "Já existe um jogo com esses dados!",
    };
  }
}

module.exports = CreateGame;
