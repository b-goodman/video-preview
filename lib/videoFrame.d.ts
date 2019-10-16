/**
 * Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param [time] position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
declare const videoFrame: (input: string, output: string, time?: number | undefined) => Promise<string>;
/**
 * Extracts a single frame from a video at a specified time.
 * @param input filepath of input video.
 * @param output filepath for generated frame.
 * @param time position (seconds) in video to extract frame.
 * @returns filepath of generated frame.
 */
export declare const videoFrameSequence: (input: string, output: string, fps: number) => Promise<string>;
export default videoFrame;
//# sourceMappingURL=videoFrame.d.ts.map