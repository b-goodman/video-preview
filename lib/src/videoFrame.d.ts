/**
 * Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param [time] position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
interface VideoFrameOptions {
    overwrite?: boolean;
    time?: number;
    scale?: {
        width?: number;
        height?: number;
    };
}
declare const videoFrame: (input: string, output: string, opts?: VideoFrameOptions | undefined) => Promise<{
    output: string;
    stdout: string;
    stderr: string;
}>;
export default videoFrame;
