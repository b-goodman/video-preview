"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileExists_1 = __importDefault(require("./fileExists"));
var stringTimestamp_1 = __importDefault(require("./stringTimestamp"));
var child_process_1 = require("child_process");
/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
var videoPreview = function (input, output, duration, opts) {
    return new Promise(function (resolve, reject) {
        if (!(opts && opts.overwrite) && fileExists_1.default(input)) {
            reject(new Error("'" + output + "' already exists.  Delete file or use {overwrite: true}"));
        }
        ;
        var cmd = "ffmpeg " + (opts && opts.overwrite ? "-y" : "") + " -ss 00:00:00 -i " + input + " -t " + stringTimestamp_1.default(duration) + " -vcodec copy -acodec copy " + output;
        child_process_1.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                reject(error);
            }
            resolve({ output: output, stdout: stdout, stderr: stderr });
        });
    });
};
exports.default = videoPreview;
//# sourceMappingURL=videoPreview.js.map