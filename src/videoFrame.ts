import { ShellExecutor } from './ShellExecutor';
import stringTimestamp from "./stringTimestamp";
import fileExists from "./fileExists";

/**
 * Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param [time] position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */

 //scale=320:-2

interface VideoFrameOptions {
    overwrite?: boolean;
    time?: number;
    scale?: {
        width?:number;
        height?:number
    }
}
const videoFrame = (input: string, output: string, opts?:VideoFrameOptions) => {

    const defaultOptions = {
        overwrite: true,
        time: 0,
        scale: {
            width: 320,
            height: -1
        }
    }

    const options = Object.assign( defaultOptions, opts);

    return new Promise<string>( (resolve, reject) => {

        if (! (options.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };

        const cmd =  `ffmpeg ${options.overwrite ? `-y` : ``} -i ${input} -vf scale=${options.scale.width || 320}:${options.scale.height || -1} -ss ${stringTimestamp(options.time || 0)} -vframes 1 ${output}`;

        const shell = new ShellExecutor(cmd).spawn();

        return new Promise( (resolve, reject) => {
            // shell.stdout!.on("data", (stdout: string) => {
            //     shell.kill("SIGTERM");
            //     resolve({output, stdout});
            // });

            shell.on("exit", (code) => {
                if (code !== 0) {
                    reject(new Error(`shell exited with code ${code}`));
                } else (
                    resolve(output)
                )
            })
            // shell.stderr!.on("data", (stderr: string) => {
            //     reject( new Error(stderr) );
            // });


            shell.on("close", (_EXIT_CODE: string) => {
                shell.kill("SIGTERM");
            });
        })
    })
};

export default videoFrame;
