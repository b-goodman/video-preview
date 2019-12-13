import { ChildProcess } from "child_process";
import util from "util";
import { spawn } from "child_process";
const exec = util.promisify(require("child_process").exec);

export class ShellExecutor {

    public opts: { shell: ShellExecutor.InterpreterPath, timeout: number };

    constructor (cmd: string, opts: { shell?: ShellExecutor.InterpreterPath, timeout?: number } = {}) {
        this.cmd = cmd;
        this.opts = { ...this.defaultOpts, ...opts };
    }

    public async exec (): Promise<{ stdout: string, stderr: string }> {
        const { stdout, stderr } = await exec(this.cmd, { maxBuffer: 1024 * 500, timeout: this.opts.timeout });
        return { stdout, stderr };
    }

    public spawn (): ChildProcess {
        const shell: ChildProcess = spawn(this.cmd, this.opts);
        if (this.opts.timeout > 0) {
        setTimeout(() => {
            shell.kill("SIGTERM");
        }, this.opts.timeout * 10e3);
        }

        return shell;
    }

    private readonly cmd: string;
    private readonly defaultOpts = { shell: ShellExecutor.InterpreterPath.zsh, timeout: 0 };

}

// tslint:disable-next-line: no-namespace
export namespace ShellExecutor {
    export const enum InterpreterPath {
        zsh = "/bin/zsh",
        bash = "/bin/bash"
    }
}