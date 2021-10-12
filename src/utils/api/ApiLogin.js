const accountsModel = require("../../app/models/mongodb/users");

async function validade(username, password) {
  try {
    const user = await accountsModel.findOne({ username });

    if (password == user.password) {
      return {
        status: 200,
        name: user.Name,
        serie: user.Serie,
        admin: user.admin,
        error: false,
      };
    } else {
      return { status: 502, error: true, errormessage: "Senha incorreta!" };
    }
  } catch {
    return {
      status: 502,
      error: true,
      errormessage: "Conta não encontrada!",
    };
  }
}

module.exports = validade;
