//* dependencies
const express = require("express");
require("dotenv").config();
const user = require("./routes/user");

//* config
const app = express();
const port = process.env.PORT || 3001;

//* middleware
app.use(express.json());

//* routes middleware
app.use("/api/users", user);

//* listener
app.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
});
