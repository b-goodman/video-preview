import fs from "fs";

const fileExists = (path: string) => {
    return new Promise<boolean>( (resolve) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            err ? resolve(false) : resolve(true);
        })
    })
}

export default fileExists;
