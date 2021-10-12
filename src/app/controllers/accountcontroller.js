const api = require("../../utils/api/ApiLogin");

module.exports = {
  async login(req, res) {
    const response = req.params;
    const apiresponse = await api(response.username, response.password);

    if (apiresponse.status == 200) {
      req.session.user = {
        name: apiresponse.name,
        serie: apiresponse.serie,
        admin: apiresponse.admin,
      };
    }

    return res.send(apiresponse);
  },

  async logout(req, res) {
    if (req.session.user != undefined) {
      req.session.destroy();
      res.redirect("/");
    } else {
      return res.redirect("/");
    }
  },
};
