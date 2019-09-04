"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
var app = express_1.default();
console.log('loaded all router modules');
require('./router')(app);
app.use(express_1.default.json());
var port = 8000;
app.set('port', port);
console.log('listening on :http://localhost:' + port);
var server = http_1.default.createServer(app);
server.listen(port);
module.exports = app;
//# sourceMappingURL=app.js.map