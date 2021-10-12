const db = require("../models/mongodb/users");
const db1 = require("../models/mongodb/games");
const db2 = require("../models/mongodb/statistics");
const apideleteuser = require("../../utils/api/ApiDeleteUser");
const apicreateuser = require("../../utils/api/ApiCreateUser");
const apideleteGame = require("../../utils/api/ApiDeleteGame");
const ApiCreateGame = require("../../utils/api/ApiCreateGame");
const ApiEditPoints = require("../../utils/api/ApiEditPoints");
const ApiEditUser = require("../../utils/api/ApiEditUser");
const EditUsers = require("../../utils/api/ApiEditUser");
const editGame = require("../../utils/api/ApiEditGame");

module.exports = {
  async Admin(req, res) {
    if (req.session.user != undefined) {
      const users = await db.find();
      const games = await db1.find();
      const classes = await db2.find();
      const session = req.session.user;
      if (session.admin == true) {
        return res.render("pages/admin/index", {
          loginPage: false,
          session: session,
          users,
          games,
          classes,
        });
      } else {
        return res.redirect("/dashboard");
      }
    } else {
      return res.redirect("/");
    }
  },

  //||||||||||||||||||||||
  //        USER
  //||||||||||||||||||||||
  async AdminUsers(req, res) {
    if (req.session.user != undefined) {
      const users = await db.find();
      const games = await db1.find();
      const classes = await db2.find();
      const session = req.session.user;

      if (session.admin == true) {
        return res.render("pages/admin/members", {
          loginPage: false,
          session: session,
          users: users,
          games: games,
          classes: classes,
        });
      } else {
        return res.redirect("/dashboard");
      }
    } else {
      return res.redirect("/");
    }
  },

  async deleteUser(req, res) {
    const response = req.body;
    console.log(response);
    await apideleteuser(response.id);
    return res.redirect("/admin-members");
  },

  async createUser(req, res) {
    const response = req.params;
    const apiresponse = await apicreateuser(
      response.username,
      response.password,
      response.name,
      response.classe
    );
    return res.send(apiresponse);
  },

  async EditUsers(req, res) {
    const result = req.body;
    const apiresponse = await ApiEditUser(
      result.id,
      result.username,
      result.password,
      result.classe,
      result.name
    );
    return res.send(apiresponse);
  },

  //||||||||||||||||||||||
  //        GAMES
  //||||||||||||||||||||||

  async AdminGames(req, res) {
    if (req.session.user != undefined) {
      const users = await db.find();
      const games = await db1.find().sort({ _id: -1 });
      const classes = await db2.find();
      const session = req.session.user;
      if (session.admin == true) {
        return res.render("pages/admin/games", {
          loginPage: false,
          session: session,
          users,
          games,
          classes,
        });
      } else {
        return res.redirect("/dashboard");
      }
    } else {
      return res.redirect("/");
    }
  },
  async deleteGame(req, res) {
    const response = req.body;
    const result = await apideleteGame(response.id);
    return res.send(result);
  },
  async createGame(req, res) {
    const response = req.body;
    const apiresponse = await ApiCreateGame(
      response.name,
      response.description,
      response.imglink,
      response.date,
      response.rooms,
      response.location,
      response.prize
    );
    return res.send(apiresponse);
  },
  async editGame(req, res) {
    const response = req.body;
    const apiresponse = await editGame(
      response.id,
      response.name,
      response.description,
      response.rooms,
      response.img,
      response.date,
      response.winner,
      response.location,
      response.prize
    );
    return res.send(apiresponse);
  },

  //||||||||||||||||||||||
  //        PLACAR
  //||||||||||||||||||||||

  async adminPoints(req, res) {
    if (req.session.user != undefined) {
      const users = await db.find();
      const games = await db1.find();
      const classes = await db2.find();
      const session = req.session.user;
      if (session.admin == true) {
        return res.render("pages/admin/points", {
          loginPage: false,
          session: session,
          users,
          games,
          classes,
        });
      } else {
        return res.redirect("/dashboard");
      }
    } else {
      return res.redirect("/");
    }
  },

  async adminPointsChange(req, res) {
    const response = req.body;
    const apiresponse = await ApiEditPoints(
      response.id,
      response.points,
      response.games
    );
    return res.send(apiresponse);
  },
};
