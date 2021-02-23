#!/usr/bin/env node

const ngrok = require('ngrok');
const liveServer = require("live-server");
const shopifyClient = require('./lib/shopify-client');
const prData = require('./lib/pr-data');
const theme = require('./lib/theme');
require('dotenv').config();

const {
    SHOP_NAME,
    NGROK_AUTH_TOKEN,
} = process.env;

/*
    🌈 Create New Theme Based on Build
*/

const uploadTheme = async () => {
    try {
        const port = 8181;
        const params = {
            port, // Defaults to 8080
            host: "0.0.0.0",
            open: false, // don't load browser
            file: 'theme.zip', // Server the theme zip directly
            logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
            watch: 'theme.zip',
        };
        liveServer.start(params);

        const ngrokUrl = await ngrok.connect({
            authtoken: NGROK_AUTH_TOKEN,
        });

        const data = prData.getPrData();
        const themeName = theme.getThemeName({ prNumber: data.number });
        const themeUrl = `${ngrokUrl}/theme.zip`;

        await shopifyClient.theme.create({
            name: themeName,
            src: themeUrl,
        })
            .then(async theme => {
                console.log(theme);
                console.log(`\x1b[33m %s \x1b[0m`, `View Theme at https://${SHOP_NAME}.myshopify.com/?preview_theme_id=${theme.id}`)
                await ngrok.kill();
                process.exit();
            });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

uploadTheme();