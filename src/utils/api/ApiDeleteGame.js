const accountsModel = require("../../app/models/mongodb/games");

async function deleteGame(id) {
  try {
    const response = await accountsModel.findByIdAndDelete(id);
    return {
      status: 200,
      error: false,
      errormessage: "Jogo deletado com sucesso",
    };
  } catch {
    return {
      status: 502,
      error: true,
      errormessage: "Jogo não encontrado!",
    };
  }
}

module.exports = deleteGame;
