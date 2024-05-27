"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = require("path");
const platform_enum_constants_1 = require("./constants/platform_enum.constants");
class Clipboards {
    constructor() {
        this.platform = "";
        const platform = process.platform;
        this.platform = platform;
    }
    prepareCopyCommand(text) {
        let command = "";
        let formattedText = text.replace(/"/g, `\\"`);
        const scriptPath = path.resolve(__dirname, "../build/scripts/copy.ps1");
        if (this.platform === platform_enum_constants_1.default.WINDOWS) {
            command = `powershell -File ${scriptPath} --text "${formattedText}"`;
        }
        else if (this.platform === platform_enum_constants_1.default.LINUX) {
            command = `pwsh -Command Set-Clipboard -Value '"${formattedText}"'`;
        }
        else if (this.platform === platform_enum_constants_1.default.MACOX) {
            command = `echo ${formattedText} | pbcopy`;
        }
        else {
            throw new Error(`Platform ${this.platform} not supported`);
        }
        return command;
    }
    copy(text) {
        const command = this.prepareCopyCommand(text);
        return new Promise((resolve, reject) => {
            return (0, child_process_1.exec)(command, (err, stdout, stderr) => {
                if (err)
                    reject({ message: err.message, cerr: err.stderr });
                else
                    resolve({ message: stdout, cerr: stderr });
            });
        });
    }
}
exports.default = Clipboards;
