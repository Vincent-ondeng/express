"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
require("dotenv").config();
var PORT = process.env.PORT || 5001;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use("/", index_routes_1["default"]);
app.listen(PORT, function () { return console.log("Server up on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map