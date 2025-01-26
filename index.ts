const express = require("express");
const app = express();
require("dotenv").config();

const UserRouter = require("./routes/UserRouter");

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserRouter);

app.listen(PORT);
