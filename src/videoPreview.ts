import stringTimestamp from "./stringTimestamp";
import util from 'util';
const exec = util.promisify(require('child_process').exec);

/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
const videoPreview = async (input:string, output: string, duration: number) => {
    const {stdout, stderr} = await exec(`ffmpeg -ss 00:00:01 -i ${input} -t ${stringTimestamp(duration)} -vcodec copy -acodec copy ${output}`);
    if (stderr) {
        throw new Error(stderr)
    } else {
        return output;
    }
}

export default videoPreview;
