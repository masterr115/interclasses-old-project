module.exports = {
    async GetLogin(req, res) {

        if (req.session.user != undefined) {
            return res.redirect("/dashboard");

        } else {
            return res.render("login/index", { loginPage: true })
        }
    },
};