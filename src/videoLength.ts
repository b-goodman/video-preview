import util from 'util';
const exec = util.promisify(require('child_process').exec);

const videoLength = async (input: string) => {
    const { stdout, stderr } = await exec(`ffprobe  -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${input}`);
    if (stderr) {
        throw new Error(stderr)
    } else {
        const durationStr = stdout as string;
        return parseInt(durationStr, 10)
    }
}

export default videoLength;
