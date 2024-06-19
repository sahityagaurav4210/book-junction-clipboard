
# <font color="#FF7F3E"> <center> Book Junction Clipboard </center> </font>

## <font color="#615EFC"> Author </font>

[Gaurav Sahitya](https://www.linkedin.com/in/sahityagaurav4210)

## <font color="#615EFC"> About </font>

This is a npm package that lets user to copy things onto their system's clipboard. This package works on all type of operating system like **Windows**, **Ubuntu** and **Mac**.

## <font color="#615EFC"> Package Requirements </font>

| ![Powershell](https://img.icons8.com/fluency/48/powershell.png) | ![NodeJs](https://img.icons8.com/fluency/48/node-js.png) | ![VS Code](https://img.icons8.com/fluency/48/visual-studio.png) |
| -------- | -------- | -------- |

<font color="#FF0000">**Note:** You can use any code editor of your choice.
</font>

## <font color="#615EFC"> Installation Steps </font>

<font color="#FF0000"> **Note:** If you are using Windows 10 or higher, you don't need to install PowerShell separately on your system, as it is already included in the operating system.
</font>

```sh
sudo apt-get update
```

```sh
sudo apt-get install -y wget apt-transport-https software-properties-common
```

```sh
source /etc/os-release
```

```sh
wget -q https://packages.microsoft.com/config/ubuntu/$VERSION_ID/packages-microsoft-prod.deb
```

```sh
sudo dpkg -i packages-microsoft-prod.deb
```

```sh
rm packages-microsoft-prod.deb
```

```sh
sudo apt-get update
```

```sh
sudo apt-get install -y powershell
```

```sh
pwsh
```

<font color="#FF0000"> **Note:** These installation steps are for ubuntu only.</font>

## <font color="#615EFC"> Usage </font>

```javascript
const Clipboards=require("@book-junction/clipboards/build");

//Instantiate the class.

const object = new Clipboards.default();

(async () => await object.copy("text to copy")); // Your text is now copied to your clipboard, press Ctrl+V to test.
```

<font color="#FF0000"> **Note:** Copy method can throw errors, so please handle them gracefully. </font>

## <font color="#615EFC"> Where it can be used </font>

This package has numerous use cases, but one practical example is its application in writing Node.js commit message generator scripts. With it, you can automatically paste the generated commit message onto the system's clipboard.
