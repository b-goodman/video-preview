"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var fileExists = function (path) {
    return new Promise(function (resolve) {
        fs_1.default.access(path, fs_1.default.constants.F_OK, function (err) {
            err ? resolve(false) : resolve(true);
        });
    });
};
exports.default = fileExists;
