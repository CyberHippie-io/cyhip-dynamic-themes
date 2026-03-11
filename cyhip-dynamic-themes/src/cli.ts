#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import appThemeProvider from './_templates/app-theme-provider.js';
import rootCss from './_templates/root-css.js';
import themeSwitcher from './_templates/theme-switcher.js';
import themeConfig from './_templates/theme.config.js';

const initThemesDirectory = (themesDir: string) => {
    if (!fs.existsSync(themesDir)) {
        fs.mkdirSync(themesDir);

        fs.writeFileSync(path.join(themesDir, 'theme.config.ts'), themeConfig.trim());
        fs.writeFileSync(path.join(themesDir, 'root.css'), rootCss.trim());
        fs.writeFileSync(path.join(themesDir, 'app-theme-provider.tsx'), appThemeProvider.trim());
        fs.writeFileSync(path.join(themesDir, 'theme-switcher.tsx'), themeSwitcher.trim());

        console.log(chalk.green(`Default files created in "${themesDir}".`));

        console.log(
            chalk.cyan(
                '\n\t /themes/\n' +
                    '\t ├── app-theme-provider.tsx\n' +
                    '\t ├── root.css\n' +
                    '\t ├── theme.config.ts\n' +
                    '\t └── theme-switcher.tsx\n',
            ),
        );

        console.log(
            chalk.cyan(
                `  1. Import /themes/root.css into the base tsx of your application, e.g.: (Main.tsx or App.tsx or Layout.tsx)`,
            ),
        );
        console.log(
            chalk.cyan(
                `  2. Wrap your application with the AppThemeProvider in your base TSX file (Main.tsx, App.tsx, or Layout.tsx).`,
            ),
        );
        console.log(chalk.cyan(`  3. Customize the color palette in /themes/theme.config.ts.`));
        console.log(
            chalk.cyan(
                `  4. Add the /themes/theme-switcher.tsx component to your application and to see how it works.`,
            ),
        );
    } else {
        console.error(
            chalk.red(
                `A "/themes/ folder already exists, it was not possible to initialize the files.`,
            ),
        );
    }
};

const checkSrcDirectory = () => {
    const srcPath = path.join(process.cwd(), 'src');
    return fs.existsSync(srcPath) ? 'src' : '.';
};

const askDirectory = async () => {
    const srcExists = checkSrcDirectory();
    const { selectedDir } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedDir',
            message: 'Where would you like to initialize the themes directory?',
            choices: [
                {
                    name: './src (if exists)',
                    value: 'src',
                    disabled: !fs.existsSync(path.join(process.cwd(), 'src')),
                },
                { name: './ (project root)', value: '.' },
            ],
            default: srcExists,
        },
    ]);
    return selectedDir;
};

const runInit = async () => {
    const directory = await askDirectory();
    const themesDir = path.join(process.cwd(), directory, 'themes');

    initThemesDirectory(themesDir);
};

const [, , command] = process.argv;
if (command === 'init') {
    runInit();
}
