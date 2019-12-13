import path from "path";
import fs from "fs-extra";
import videoPreview, {videoFrame, videoLength} from "../src";

const input = path.join( __dirname, "input", "SampleVideo_1280x720_1mb.mp4");
const outputDir = path.join( __dirname, "output");

beforeAll( (done) => {
    fs.emptyDir(outputDir)
        .then(() => {
            done();
        })
});

it("returns duration of video", () => {
    videoLength(input).then( (duration) => {
        expect(duration).toBe(5);
    });
});

it("uses default computed preview duration if video length is greater than 10s.", () => {
    const outputPath = path.join(outputDir, "preview_default.mp4");
    videoPreview(input, outputPath )
        .then( () => {
            fs.pathExists(outputPath)
                .then( (exists) => {
                    expect(exists).toBeTruthy();
                })
        })
        .catch( (err) => {
            console.log(err);
        })
});

it("uses custom duration option.", () => {
    const outputPath = path.join(outputDir, "preview_short.mp4");
    videoPreview(input, outputPath, {duration: 1})
        .then( ({output, stdout}) => {
            videoLength(output)
                .then( (duration) => {
                    expect(duration).toBe(1);
                });
        })
        .catch( (err) => {
            console.log(err);
        })
});

it("generate preview frame.", () => {
    const outputPath = path.join(outputDir, "preview.png");
    videoFrame(input, outputPath)
        .then( () => {
            fs.pathExists(outputPath)
                .then( (exists) => {
                    expect(exists).toBeTruthy();
                })
        })
})







