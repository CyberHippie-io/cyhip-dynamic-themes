#!/usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import huePalettes from "./_templates/hue-scheme.js";
import rootCss from "./_templates/root-css.js";
import themeColors from "./_templates/theme-colors.js";
import themeSwitcher from "./_templates/theme-switcher.js";

const initThemesDirectory = (themesDir: string) => {
    if (!fs.existsSync(themesDir)) {
        fs.mkdirSync(themesDir);

        fs.writeFileSync(
            path.join(themesDir, "hue-palettes.ts"),
            huePalettes.trim()
        );
        fs.writeFileSync(path.join(themesDir, "root.css"), rootCss.trim());
        fs.writeFileSync(
            path.join(themesDir, "theme-colors.ts"),
            themeColors.trim()
        );
        fs.writeFileSync(
            path.join(themesDir, "theme-switcher.tsx"),
            themeSwitcher.trim()
        );

        console.log(chalk.green(`Default files created in "${themesDir}".`));

        console.log(
            chalk.cyan(
                "\n\t /themes/\n" +
                    "\t ├── hue-palettes.ts\n" +
                    "\t ├── root.css\n" +
                    "\t ├── theme-colors.ts\n" +
                    "\t └── theme-switcher.tsx\n"
            )
        );

        console.log(
            chalk.cyan(
                `  1. Update your tailwind.conf.ts as described in /themes/theme-colors.ts`
            )
        );
        console.log(
            chalk.cyan(
                `  2. Import /themes/root.css into the base tsx of your application, e.g.: [ Main.tsx or App.tsx or Layout.tsx ]`
            )
        );
        console.log(
            chalk.cyan(
                `  3. Add the /themes/theme-switcher.tsx component to your application and to see how it works.`
            )
        );
    } else {
        console.error(
            chalk.red(
                `A "/themes/ folder already exists, it was not possible to initialize the files.`
            )
        );
    }
};

const checkSrcDirectory = () => {
    const srcPath = path.join(process.cwd(), "src");
    return fs.existsSync(srcPath) ? "src" : ".";
};

const askDirectory = async () => {
    const srcExists = checkSrcDirectory();
    const { selectedDir } = await inquirer.prompt([
        {
            type: "list",
            name: "selectedDir",
            message: "Where would you like to initialize the themes directory?",
            choices: [
                {
                    name: "./src (if exists)",
                    value: "src",
                    disabled: !fs.existsSync(path.join(process.cwd(), "src")),
                },
                { name: "./ (project root)", value: "." },
            ],
            default: srcExists,
        },
    ]);
    return selectedDir;
};

const runInit = async () => {
    const directory = await askDirectory();
    const themesDir = path.join(process.cwd(), directory, "themes");

    initThemesDirectory(themesDir);
};

const [, , command] = process.argv;
if (command === "init") {
    runInit();
}
