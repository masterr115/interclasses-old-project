require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const handlebars = require("handlebars");
const bodyParser = require("body-parser");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const expressHandlebars = require("express-handlebars");
const helpers = require("../public/js/helpers");
const path = require("path");

//||||||||||||||||||||||
//   SET AND ENGINE
//||||||||||||||||||||||

app.set("views", path.join(__dirname, "/app/views"));
app.use(express.static("public"));

app.set("view engine", "hbs");
app.engine(
  "hbs",
  expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "main",
    helpers,
  })
);

//||||||||||||||||||||||
//        USES
//||||||||||||||||||||||

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.APP_AUTHORIZATION_TOKEN,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

//||||||||||||||||||||||
//        ROUTES
//||||||||||||||||||||||
const routes = require("./routes");
app.use("/", routes);

module.exports = app;
