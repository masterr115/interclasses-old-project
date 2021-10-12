const express = require("express");
const router = express.Router();
const accountcontroller = require("./app/controllers/accountcontroller");
const gamescontoller = require("./app/controllers/gamescontroller");
const logincontroller = require("./app/controllers/logincontroller");
const admincontroller = require("./app/controllers/admincontroller");

//||||||||||||||||||||||
//        LOGIN
//||||||||||||||||||||||
router.get("/", logincontroller.GetLogin);
router.get("/logout", accountcontroller.logout);
router.post("/account/login/:username/:password", accountcontroller.login);

//||||||||||||||||||||||
//        DASH
//||||||||||||||||||||||
router.get("/dashboard", gamescontoller.GetGames);
router.get("/statistics", gamescontoller.GetStatistics);

//||||||||||||||||||||||
//        ADMIN
//||||||||||||||||||||||
router.get("/admin", admincontroller.Admin);
router.get("/admin-members", admincontroller.AdminUsers);
router.get("/admin-games", admincontroller.AdminGames);

router.post("/admin-members/delete", admincontroller.deleteUser);
router.post(
  "/admin-members/create/:username/:password/:classe/:name",
  admincontroller.createUser
);
router.post("/admin-members/edit", admincontroller.EditUsers);

router.post("/admin-games/create", admincontroller.createGame);
router.post("/admin-games/delete", admincontroller.deleteGame);
router.post("/admin-games/edit", admincontroller.editGame);

router.get("/admin-points", admincontroller.adminPoints);
router.post("/admin-points/change", admincontroller.adminPointsChange);

module.exports = router;
