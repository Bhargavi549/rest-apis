const express = require("express");
const app = express();
const registerRoute = require("./src/routes/index");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use("/", registerRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
