import stringTimestamp from "./stringTimestamp";
import fileExists from "./fileExists";
import { exec } from 'child_process';

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

    return new Promise<{output: string, stdout: string, stderr: string}>( (resolve, reject) => {
        if (! (options.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };
        const cmd =  `ffmpeg ${options.overwrite ? `-y` : ``} -i ${input} -vf scale=${options.scale.width}:${options.scale.height} -ss ${stringTimestamp(options.time || 0)} -vframes 1 ${output}`;
        exec(cmd,  (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            resolve({output, stdout, stderr});
        });
    })
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

export default videoFrame;
