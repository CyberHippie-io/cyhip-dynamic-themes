#!/usr/bin/env node

import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import huePalettes from "./_templates/hue-scheme.js";
import rootCss from "./_templates/root-css.js";
import themeColors from "./_templates/theme-colors.js";

// import chalk from "chalk";
// import fs from "fs";
// import inquirer from "inquirer";
// import path from "path";
// import { fileURLToPath } from "url";

// const huePalettes = require("./_templates/hue-palettes");
// const rootCss = require("./_templates/root-css");
// const themeColors = require("./_templates/theme-colors");

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

        console.log(chalk.green(`Default files created in "${themesDir}".`));

        console.log(
            chalk.cyan(
                `  - Set your color palettes in "/themes/hue-palettes.ts".`
            )
        );
        console.log(
            chalk.cyan(`  - Customize your theme in "/themes/root.css".`)
        );
        console.log(
            chalk.cyan(
                `  - See how to enable accent vars on tailwind.config.ts in "/themes/theme-colors.ts".`
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
