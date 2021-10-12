const accountsModel = require("../../app/models/mongodb/users");

async function EditUsers(id, username, password, classe, name) {
  try {
    await accountsModel.findOneAndUpdate(
      { _id: id },
      { username: username, password: password, Name: name, Serie: classe },
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

module.exports = EditUsers;
