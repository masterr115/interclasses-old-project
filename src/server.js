const app = require("./app");

require("dotenv").config();
require("./app/models/mongo");

//||||||||||||||||||||||
//        LISTEN
//||||||||||||||||||||||

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING AT: http://localhost:` + process.env.PORT);
});
