"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
module.exports = (app) => {
    let __base = __dirname;
    __base = __base.replace('dist', '');
    console.log(__base);
    glob_1.default('**/router.*.js', {}, (er, files) => {
        files.forEach((file) => {
            console.log(file);
            app.use('/', require(__base + file));
        });
        console.log('loaded all router modules from path : ' + __base);
    });
};
//# sourceMappingURL=router.js.map