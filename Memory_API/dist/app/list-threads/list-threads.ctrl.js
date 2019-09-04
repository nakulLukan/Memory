"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const service = __importStar(require("./list-thread.service"));
const getThreads = (req, res) => {
    let threads = service.listThreads();
    return res
        .status(http_status_codes_1.default.OK)
        .send(threads);
};
exports.getThreads = getThreads;
//# sourceMappingURL=list-threads.ctrl.js.map