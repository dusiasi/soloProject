"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'dotenv/config';
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const router_1 = require("./router");
const port = 3000;
const app = (0, express_1.default)();
// cors
app.use((0, cors_1.default)());
// json
app.use(express_1.default.json());
// router
app.use(router_1.router);
app.listen(port, () => {
    `listening on ${port}`;
});
