"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShellExecutor_1 = require("./ShellExecutor");
var fileExists_1 = __importDefault(require("./fileExists"));
var stringTimestamp_1 = __importDefault(require("./stringTimestamp"));
var videoLength_1 = __importDefault(require("./videoLength"));
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
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var computedDefaultDuration, inputDuration, err_1, cmd, shell;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(options.overwrite) && fileExists_1.default(input)) {
                        reject(new Error("'" + output + "' already exists.  Delete file or use {overwrite: true}"));
                    }
                    ;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    computedDefaultDuration = Math.ceil(0.1 * 5);
                    return [4 /*yield*/, videoLength_1.default(input)];
                case 2:
                    inputDuration = _a.sent();
                    if (inputDuration < options.duration) {
                        options.duration = computedDefaultDuration;
                        console.log("Video duration is less than given preview length.  Using computedDefaultDuration (" + computedDefaultDuration + "s) instead.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    reject(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    cmd = "ffmpeg -i " + input + " " + (options.overwrite ? "-y" : "") + " -vf scale=" + (options.scale.width || -1) + ":" + (options.scale.height || -2) + " -ss 00:00:00 -t " + stringTimestamp_1.default(options.duration) + " " + output;
                    shell = new ShellExecutor_1.ShellExecutor(cmd).spawn();
                    shell.stdout.on("data", function (stdout) {
                        shell.kill("SIGTERM");
                        resolve({ output: output, stdout: stdout });
                    });
                    // shell.stderr!.on("data", (stderr: string) => {
                    //     shell.kill("SIGTERM");
                    //     reject( new Error(stderr) );
                    // });
                    shell.on("close", function (_EXIT_CODE) {
                        shell.kill("SIGTERM");
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.default = videoPreview;
