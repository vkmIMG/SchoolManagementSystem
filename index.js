require("dotenv").config();

// required package......
const express = require("express");
const app = express();
const LibraryRoutes = require("./src/routes/library/routes");

app.use(express.json());

//require db
require("./src/db/config/config");
app.use("/api/library", LibraryRoutes);

//server .....
app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});