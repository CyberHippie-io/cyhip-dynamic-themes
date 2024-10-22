#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { huePalettes } = require("./_templates/hue-palettes");
const { rootCss } = require("./_templates/root-css");
const { themeColors } = require("./_templates/theme-colors");

const initThemesDirectory = () => {
    const themesDir = path.join(process.cwd(), "themes");

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

        console.info('Default files created in "./themes".');
        console.info(
            '  - Set your color palettes in "./themes/hue-palettes.ts".'
        );
        console.info('  - Customize your theme in "./themes/root.css".');
        console.info(
            '  - See how to enable accent vars on tailwind.config.ts on "./color-themes.ts".'
        );
    } else {
        console.error(
            'A "./themes" folder already exists in the project root, it was not possible to initialize the files.'
        );
    }
};

const [, , command] = process.argv;
if (command === "init") {
    initThemesDirectory();
}
