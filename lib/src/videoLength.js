"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShellExecutor_1 = require("./ShellExecutor");
var videoLength = function (input) {
    var cmd = "ffprobe  -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 " + input;
    var shell = new ShellExecutor_1.ShellExecutor(cmd).spawn();
    return new Promise(function (resolve, reject) {
        shell.stdout.on("data", function (stdout) {
            var durationStr = stdout;
            resolve(parseInt(durationStr, 10));
        });
        shell.stderr.on("data", function (stderr) {
            reject(new Error(stderr));
        });
        shell.on("close", function (_EXIT_CODE) {
            shell.kill("SIGTERM");
        });
    });
};
exports.default = videoLength;
