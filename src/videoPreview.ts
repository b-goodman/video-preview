import fileExists from "./fileExists";
import stringTimestamp from "./stringTimestamp";
import { exec } from 'child_process';

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

    return new Promise<{output: string, stdout: string, stderr: string}>( (resolve, reject) => {
        if (!(options.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };
        const cmd = `ffmpeg -i ${input} ${options.overwrite ? `-y` : ``} -vf scale=${options.scale.width || -1}:${options.scale.height || -2} -ss 00:00:00 -t ${stringTimestamp(options.duration)} ${output}`;
        exec(cmd,  (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            resolve({output, stdout, stderr});
        });
    })
}

export default videoPreview;
