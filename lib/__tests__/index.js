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
var path_1 = __importDefault(require("path"));
var src_1 = __importStar(require("../src"));
var input = path_1.default.join(__dirname, "input", "SampleVideo_1280x720_1mb.mp4");
var outputDir = path_1.default.join(__dirname, "output");
it("returns duration of video", function () {
    src_1.videoLength(input).then(function (duration) {
        expect(duration).toBe(5);
    });
});
it("uses default computed preview duration if video length is greater than 10s.", function () {
    var outputPath = path_1.default.join(outputDir, "preview.mp4");
    src_1.default(input, outputPath)
        .then(function (_a) {
        var output = _a.output, stdout = _a.stdout;
        expect(output).toBe(outputPath);
    })
        .catch(function (err) {
        console.log(err);
    });
});
it("uses custom duration option.", function () {
    var outputPath = path_1.default.join(outputDir, "preview.mp4");
    src_1.default(input, outputPath, { duration: 1 })
        .then(function (_a) {
        var output = _a.output, stdout = _a.stdout;
        src_1.videoLength(output)
            .then(function (duration) {
            expect(duration).toBe(1);
        });
    })
        .catch(function (err) {
        console.log(err);
    });
});
