import stringTimestamp from "./stringTimestamp";
import util from 'util';
const exec = util.promisify(require('child_process').exec);

/**
 * Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param [time] position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
const videoFrame = async (input: string, output: string, time?: number) => {
    const { _stdout, stderr } = await exec(`ffmpeg -i ${input} -ss ${stringTimestamp(time || 0)} -vframes 1 ${output}`);
    if (stderr) {
        throw new Error(stderr)
    } else {
        return output;
    }
};

/**
 * Extracts a single frame from a video at a specified time.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param time position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
export const videoFrameSequence = async (input: string, output: string, fps: number) => {
    const { _stdout, stderr } = await exec(`ffmpeg -i ${input} -vf fps=${fps} out%d.png`);
    if (stderr) {
        throw new Error(stderr)
    } else {
        return output;
    }
};

export default videoFrame;
