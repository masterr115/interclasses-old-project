const accountsModel = require("../../app/models/mongodb/users");

async function deleteUser(id) {
  try {
    const response = await accountsModel.findByIdAndDelete(id);
    return {
      status: 200,
      error: false,
      errormessage: "Conta deletada com sucesso",
    };
  } catch {
    return {
      status: 502,
      error: true,
      errormessage: "Conta não encontrada!",
    };
  }
}

module.exports = deleteUser;
