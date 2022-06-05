import express, { Application } from "express";

const cors = require("cors");
const routing = require("./routes");

const { unHandledErrorMiddleware } = require("./middlewares");

const PORT: number = 5000;

const app: Application = express();

app.use(unHandledErrorMiddleware); //for all endpoints which dosen't have try catch
app.use(cors());


app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));

app.use("/", routing);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

