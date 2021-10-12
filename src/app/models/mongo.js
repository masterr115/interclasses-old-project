const Mongoose = require("mongoose");

Mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => {
    console.log(`ERROR (MONGODB): ${err}`);
  });

module.exports = Mongoose;
