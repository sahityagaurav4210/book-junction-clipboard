## Book Junction Clipboard

Author
---
[Gaurav Sahitya](https://www.linkedin.com/in/sahityagaurav4210)

About:
---
This is a npm package that lets user to copy things onto their system's clipboard. This package works on all type of operating system like **Windows**, **Ubuntu** and **Mac**.

Package Requirements
---
 - ![Powershell](https://img.icons8.com/fluency/48/powershell.png) 
 - ![NodeJs](https://img.icons8.com/fluency/48/node-js.png)
- ![VS Code](https://img.icons8.com/fluency/48/visual-studio.png)

**Note:** You can use any code editor of your choice.

Installation Steps
---
**Note:** If you are using Windows 10 or higher, you don't need to install PowerShell separately on your system, as it is already included in the operating system.

```sh
# Prerequisites

# Update the list of packages
sudo apt-get update

# Install pre-requisite packages.
sudo apt-get install -y wget apt-transport-https software-properties-common

# Get the version of Ubuntu
source /etc/os-release

# Download the Microsoft repository keys
wget -q https://packages.microsoft.com/config/ubuntu/$VERSION_ID/packages-microsoft-prod.deb

# Register the Microsoft repository keys
sudo dpkg -i packages-microsoft-prod.deb

# Delete the Microsoft repository keys file
rm packages-microsoft-prod.deb

# Update the list of packages after we added packages.microsoft.com
sudo apt-get update

###################################
# Install PowerShell
sudo apt-get install -y powershell

# Start PowerShell
pwsh
```
These installation steps are for ubuntu only.

Usage
---

```javascript
const Clipboards=require("@book-junction/clipboards");

//Instantiate the class.

const object = new Clipboards();

(async () => await object.copy("text to copy")); // Your text is now copied to your clipboard, press Ctrl+V to test.
```

**Note:** Copy method can throw errors, so please handle them gracefully.

Where it can be used?
---
This package has numerous use cases, but one practical example is its application in writing Node.js commit message generator scripts. With it, you can automatically paste the generated commit message onto the system's clipboard.