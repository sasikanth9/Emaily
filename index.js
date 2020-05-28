const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to db");
    }
  }
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'><button>sign in</button></a>");
});

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
