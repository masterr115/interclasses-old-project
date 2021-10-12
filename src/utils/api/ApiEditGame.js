const accountsModel = require("../../app/models/mongodb/games");

async function EditGame(
  id,
  name,
  description,
  rooms,
  img,
  date,
  winner,
  location,
  prize
) {
  try {
    await accountsModel.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        description: description,
        rooms: rooms,
        date: date,
        img: img,
        winner: winner,
        location: location,
        prize: prize,
      },
      { useFindAndModify: false, new: true }
    );
    return {
      status: 200,
      error: false,
      errormessage: "Atualizado com sucesso!",
    };
  } catch {
    return {
      status: 502,
      error: true,
      errormessage: "Erro ao atualizar! Contate o suporte.",
    };
  }
}

module.exports = EditGame;
