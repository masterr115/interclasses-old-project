const accountsModel = require("../../app/models/mongodb/users");
var mongoose = require("mongoose");

async function CreateUser(username, password, name, serie) {
  const response = await accountsModel.findOne({ username });
  if (response == null) {
    const account = [
      {
        _id: mongoose.Types.ObjectId(),
        username: username,
        password: password,
        Name: name,
        Serie: serie,
        admin: false,
      },
    ];
    await accountsModel.create(account);
    return {
      status: 200,
      error: false,
      errormessage: "Conta criada com sucesso!",
    };
  } else {
    return {
      status: 502,
      error: true,
      errormessage: "Já existe uma conta com esses dados!",
    };
  }
}

module.exports = CreateUser;
