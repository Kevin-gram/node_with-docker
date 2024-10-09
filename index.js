const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("This route is working well");
});
app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});
