const mongoose = require("mongoose");
const URI = 'mongodb://root:root@172.17.0.2:27017';

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("debug", true);

const credentials = {
  user: 'docker',
  pass: 'docker',
  dbName: 'petfood',
};

mongoose
  .connect(URI, credentials)
  .then(() => console.log("Database is up."))
  .catch((err) => console.log(err));
