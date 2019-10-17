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
var videoPreview = function (input, output, opts) {
    var defaultOptions = {
        overwrite: true,
        duration: 5,
        scale: {
            width: -1,
            height: -2
        }
    };
    var options = Object.assign(defaultOptions, opts);
    return new Promise(function (resolve, reject) {
        if (!(options.overwrite) && fileExists_1.default(input)) {
            reject(new Error("'" + output + "' already exists.  Delete file or use {overwrite: true}"));
        }
        ;
        var cmd = "ffmpeg -i " + input + " " + (options.overwrite ? "-y" : "") + " -vf scale=" + (options.scale.width || -1) + ":" + (options.scale.height || -2) + " -ss 00:00:00 -t " + stringTimestamp_1.default(options.duration) + " " + output;
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