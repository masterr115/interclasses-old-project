const db = require("../models/mongodb/games");
const db1 = require("../models/mongodb/statistics");

module.exports = {
  async GetGames(req, res) {
    if (req.session.user != undefined) {
      const find = await db.find().sort({ _id: -1 });
      const session = req.session.user;
      const statistics = await db1.findOne({ serie: session.serie });
      return res.render("pages/dashboard", {
        loginPage: false,
        find,
        statistics,
        session,
      });
    } else {
      return res.redirect("/");
    }
  },
  async GetStatistics(req, res) {
    const session = req.session.user;
    if (session != undefined) {
      const statistics = await db1.find();
      res.render("pages/statistics", { loginPage: false, statistics, session });
    } else {
      res.redirect("/");
    }
  },
};
