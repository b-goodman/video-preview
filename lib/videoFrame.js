"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringTimestamp_1 = __importDefault(require("./stringTimestamp"));
var fileExists_1 = __importDefault(require("./fileExists"));
var child_process_1 = require("child_process");
/**
 * Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param [time] position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
var videoFrame = function (input, output, time, opts) {
    return new Promise(function (resolve, reject) {
        if (!(opts && opts.overwrite) && fileExists_1.default(input)) {
            reject(new Error("'" + output + "' already exists.  Delete file or use {overwrite: true}"));
        }
        ;
        var cmd = "ffmpeg " + (opts && opts.overwrite ? "-y" : "") + " -i " + input + " -ss " + stringTimestamp_1.default(time || 0) + " -vframes 1 " + output;
        child_process_1.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                reject(error);
            }
            resolve({ output: output, stdout: stdout, stderr: stderr });
        });
    });
};
// /**
//  * Extracts a single frame from a video at a specified time.
//  * @param input filepath of input video.
//  * @param output filepath for generated frame.
//  * @param time position (seconds) in video to extract frame.
//  * @returns filepath of generated frame.
//  */
// export const videoFrameSequence = async (input: string, output: string, fps: number) => {
//     const { _stdout, stderr } = await exec(`ffmpeg -i ${input} -vf fps=${fps} out%d.png`);
//     if (stderr) {
//         throw new Error(stderr)
//     } else {
//         return output;
//     }
// };
exports.default = videoFrame;
//# sourceMappingURL=videoFrame.js.map