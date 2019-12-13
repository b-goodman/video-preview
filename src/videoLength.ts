import { ShellExecutor } from './ShellExecutor';

const videoLength = (input: string): Promise<number> => {
    const cmd = `ffprobe  -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${input}`;

    const shell = new ShellExecutor(cmd).spawn();

    return new Promise( (resolve, reject) => {
        shell.stdout!.on("data", (stdout: string) => {
            const durationStr = stdout as string;
            resolve(parseInt(durationStr, 10));
        });

        shell.stderr!.on("data", (stderr: string) => {
            reject( new Error(stderr) );
        });

        shell.on("close", (_EXIT_CODE: string) => {
            shell.kill("SIGTERM");
        });
    })
}

export default videoLength;
