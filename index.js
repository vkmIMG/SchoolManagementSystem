require("dotenv").config()
const libraryRoutes = require("./src/routes/library/routes");
// required package......
const express = require("express");
const app = express();

app.use(express.json());

app.use('/api/library', libraryRoutes);

//require db
require("./src/db/config/config");

//server .....
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})