import { ShellExecutor } from './ShellExecutor';
import fileExists from "./fileExists";
import stringTimestamp from "./stringTimestamp";
import videoLength from "./videoLength";

interface VideoPreviewOptions {
    overwrite?: boolean;
    duration?: number;
    scale?: {
        width?:number;
        height?:number
    }
}

/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
const videoPreview = (input:string, output: string, opts?: VideoPreviewOptions ) => {

    const defaultOptions = {
        overwrite: true,
        duration: 5,
        scale: {
            width: -1,
            height: -2
        }
    }

    const options = Object.assign( defaultOptions, opts);

    return new Promise<{output: string, stdout: string}>( async (resolve, reject) => {

        if (!(options.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };

        //get video duration, if less than specified option, use computed default;
        try {
            const computedDefaultDuration = Math.ceil(0.1 * 5);
            const inputDuration = await videoLength(input);
            if (inputDuration < options.duration) {
                options.duration = computedDefaultDuration;
                console.log(`Video duration is less than given preview length.  Using computedDefaultDuration (${computedDefaultDuration}s) instead.`)
            }
        } catch (err) {
            reject(err);
        }


        const cmd = `ffmpeg -i ${input} ${options.overwrite ? `-y` : ``} -vf scale=${options.scale.width || -1}:${options.scale.height || -2} -ss 00:00:00 -t ${stringTimestamp(options.duration)} ${output}`;

        const shell = new ShellExecutor(cmd).spawn();

        shell.stdout!.on("data", (stdout: string) => {
            shell.kill("SIGTERM");
            resolve({output, stdout});
        });

        // shell.stderr!.on("data", (stderr: string) => {
        //     shell.kill("SIGTERM");
        //     reject( new Error(stderr) );
        // });

        shell.on("close", (_EXIT_CODE: string) => {
            shell.kill("SIGTERM");
        });

    })
}

export default videoPreview;
