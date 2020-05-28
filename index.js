const express = require("express");
const app = express();
require('./services/passport')
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {
  res.send("<a href='/auth/google'><button>sign in</button></a>");
});



app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
