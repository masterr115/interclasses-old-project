const accountsModel = require("../../app/models/mongodb/statistics");

async function EditPoints(id, points, games) {
  try {
    await accountsModel.findOneAndUpdate(
      { _id: id },
      { Points: points, Games: games },
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

module.exports = EditPoints;
