import fileExists from "./fileExists";
import stringTimestamp from "./stringTimestamp";
import { exec } from 'child_process';

/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
const videoPreview = (input:string, output: string, duration: number, opts?:{overwrite?: boolean} ) => {
    return new Promise<{output: string, stdout: string, stderr: string}>( (resolve, reject) => {
        if (! (opts && opts.overwrite) && fileExists(input)) {
            reject(new Error(`'${output}' already exists.  Delete file or use {overwrite: true}`));
        };
        const cmd = `ffmpeg ${opts && opts.overwrite ? `-y` : ``} -ss 00:00:00 -i ${input} -t ${stringTimestamp(duration)} -vcodec copy -acodec copy ${output}`;
        exec(cmd,  (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            resolve({output, stdout, stderr});
        });
    })
}

export default videoPreview;
