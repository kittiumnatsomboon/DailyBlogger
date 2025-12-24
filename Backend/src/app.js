"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var database_js_1 = require("./connectdatabase/database.js");
dotenv_1.default.config();
// app router
var app = (0, express_1.default)();
(0, database_js_1.default)();
// cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello Express + TypeScript");
});
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
