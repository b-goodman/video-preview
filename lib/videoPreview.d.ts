/**
 * Saves a slice of video to file.
 * @param input filepath of input video.
 * @param output filepath of preview.
 * @param duration duration (sec.) of preview.
 */
declare const videoPreview: (input: string, output: string, duration: number, opts?: {
    overwrite?: boolean | undefined;
} | undefined) => Promise<{
    output: string;
    stdout: string;
    stderr: string;
}>;
export default videoPreview;
//# sourceMappingURL=videoPreview.d.ts.map