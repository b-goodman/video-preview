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
const videoFrame = (input: string, output: string, time?: number, opts?:{overwrite?: boolean}) => {
    return new Promise( async (resolve, reject) => {
        if (! (opts && opts.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };
        const cmd =  `ffmpeg ${opts && opts.overwrite ? `-y` : ``} -i ${input} -ss ${stringTimestamp(time || 0)} -vframes 1 ${output}`;
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
