"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require("cors");
var routing = require("./routes");
var unHandledErrorMiddleware = require("./middlewares").unHandledErrorMiddleware;
var PORT = 5000;
var app = express_1.default();
app.use(unHandledErrorMiddleware); //for all endpoints which dosen't have try catch
app.use(cors());
app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use("/", routing);
app.listen(PORT, function () { return console.log("Listening on port " + PORT); });
//# sourceMappingURL=index.js.map