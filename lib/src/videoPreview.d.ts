interface VideoPreviewOptions {
    overwrite?: boolean;
    duration?: number;
    scale?: {
        width?: number;
        height?: number;
    };
}
/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
declare const videoPreview: (input: string, output: string, opts?: VideoPreviewOptions | undefined) => Promise<{
    output: string;
    stdout: string;
}>;
export default videoPreview;
