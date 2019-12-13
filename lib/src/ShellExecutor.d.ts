/// <reference types="node" />
import { ChildProcess } from "child_process";
export declare class ShellExecutor {
    opts: {
        shell: ShellExecutor.InterpreterPath;
        timeout: number;
    };
    constructor(cmd: string, opts?: {
        shell?: ShellExecutor.InterpreterPath;
        timeout?: number;
    });
    exec(): Promise<{
        stdout: string;
        stderr: string;
    }>;
    spawn(): ChildProcess;
    private readonly cmd;
    private readonly defaultOpts;
}
export declare namespace ShellExecutor {
    const enum InterpreterPath {
        zsh = "/bin/zsh",
        bash = "/bin/bash"
    }
}
