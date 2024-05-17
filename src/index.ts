import { exec } from "child_process";
import Platform from "./constants/platform_enum.constants";

interface ICopy {
  message: string;
  cerr: string | undefined;
}

class Clipboards {
  private platform: string = "";

  constructor() {
    const platform: NodeJS.Platform = process.platform;
    this.platform = platform;
  }

  private prepareCopyCommand(text: string): string {
    let command: string = "";
    if (this.platform === Platform.WINDOWS) {
      command = `powershell Set-Clipboard -Value '"${text}"'`;
    } else if (this.platform === Platform.LINUX) {
      command = `printf ${text} | xclip -selection clipboard`;
    } else if (this.platform === Platform.MACOX) {
      command = `echo ${text} | pbcopy`;
    } else {
      throw new Error(`Platform ${this.platform} not supported`);
    }

    return command;
  }

  public copy(text: string): Promise<ICopy> {
    const command = this.prepareCopyCommand(text);

    return new Promise((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) reject({ message: err.message, cerr: err.stderr });
        else resolve({ message: stdout, cerr: stderr });
      });
    });
  }
}

export default Clipboards;
